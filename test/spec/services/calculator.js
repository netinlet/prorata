'use strict';

describe('Factories: Calculator', function () {

  // load the factories module
  beforeEach(module('prorataApp'));

  var subject;

  // Initialize the factory
  beforeEach(inject(function (Calculator) {
    subject = Calculator;
  }));

  it('returns the proper definition of oneDay', function() {
    expect(subject.oneDayInMilliSeconds).toEqual(24*60*60*1000);
  });

  it('calculates there is one day between jan 1 and jan 2', function() {
    expect(subject.daysBetweenDates(new Date('01/01/2014'), new Date('01/02/2014'))).toEqual(1);
  });

  it('calculates there 365 days between jan 1 and jan 1 the following year', function() {
    expect(subject.daysBetweenDates(new Date('01/01/2014'), new Date('01/01/2015'))).toEqual(365);
  });

  it('calculates there 366 days between jan 1 and jan 1 when its a leap year', function() {
    expect(subject.daysBetweenDates(new Date('01/01/2008'), new Date('01/01/2009'))).toEqual(366);
  });


  describe('isValidDate', function() {
    it('2014-02-24 is a valid date', function() {
      expect(subject.isValidDate(new Date('2014-02-24'))).toEqual(true);
    });

    it('2014-13-24 is not a valid date', function() {
      expect(subject.isValidDate(new Date('2014-13-24'))).toEqual(false);
    });

    it('expects an empty string is not a valid date', function() {
      expect(subject.isValidDate('')).toEqual(false);
    });

    it('expects null not to be a valid date', function() {
      expect(subject.isValidDate(null)).toEqual(false);
    });
  });

  describe('ProRata Calculations - standard', function() {
    describe('when Eff:01/01/2013 Exp:01/01/2014 Cancel:06/30/2013', function() {
      var result;

      beforeEach(function() {
        result = subject.calculateProRata(new Date('01/01/2013'), new Date('01/01/2014'), new Date('06/30/2013'), 100000, 'standard');
      });

      it('calculates the earnedDays', function() {
        expect(result.earnedDays).toEqual(180);
      });

      it('calculates the unearnedDays', function() {
        expect(result.unearnedDays).toEqual(185);
      });

      it('calculates the totalDays', function() {
        expect(result.totalDays).toEqual(365);
      });

      it('calculates the ProRata Factor', function() {
        expect(result.prorataFactor).toEqual(0.507);
      });

      it('calculates the earnedPremium', function() {
        expect(result.earnedPremium).toEqual('49300.00');
      });

      it('calculates the unearnedPremium', function() {
        expect(result.unearnedPremium).toEqual('50700.00');
      });

    });

  });

  it('calculates the ProRata Factor correctly when its using the shortRate factor', function() {
    var result = subject.calculateProRata(new Date('01/01/2013'), new Date('01/01/2014'), new Date('06/30/2013'), 100000, 'shortRate');
    expect(result.prorataFactor).toEqual('0.456');
  });


});

