'use strict';

angular.module('prorataApp')
.factory('Calculator', function() {
  return {
    oneDayInMilliSeconds: 86400000, // hours*minutes*seconds*milliseconds

    daysBetweenDates: function(startDate, endDate) {
      return Math.round(Math.abs((endDate.getTime() - startDate.getTime())/(this.oneDayInMilliSeconds)));
    },

    isValidDate: function(d) {
      return Object.prototype.toString.call(d) === '[object Date]' && !isNaN(d.getTime());
    },

    calculateProRata: function(effDate, expDate, cancellationDate, premiumAmount, factor) {
      var totalDays, unearnedDays, earnedDays;
      var prorataFactor = 0;
      factor = factor || 'standard';

      if (this.isValidDate(effDate) && this.isValidDate(expDate)) {
        totalDays = this.daysBetweenDates(effDate, expDate);
      }

      if (this.isValidDate(effDate) && this.isValidDate(expDate) && this.isValidDate(cancellationDate)) {
        earnedDays = this.daysBetweenDates(effDate, cancellationDate);
        unearnedDays = totalDays - earnedDays;
        prorataFactor = parseFloat((unearnedDays / totalDays).toFixed(3));
        if ('shortRate' === factor) {
          prorataFactor = parseFloat(prorataFactor * 0.9).toFixed(3);
        }
      }

      var earnedPremium = 0;
      var unearnedPremium = 0;

      if (premiumAmount) {
        unearnedPremium = (premiumAmount * prorataFactor).toFixed(2);
        earnedPremium = (premiumAmount - unearnedPremium).toFixed(2);
      }

      return {
        earnedDays: earnedDays,
        unearnedDays: unearnedDays,
        totalDays: totalDays,
        prorataFactor: prorataFactor,
        unearnedPremium: unearnedPremium,
        earnedPremium: earnedPremium
      };
    }
  };

});


/*
 *  total policy days - earned days = unearned days
 *  ProRata factor is (unearned / TotalPolicyDays)
 *  Return Premium is ProRataFactor * Premium
 */

