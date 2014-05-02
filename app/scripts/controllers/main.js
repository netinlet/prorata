'use strict';


angular.module('prorataApp')
  .controller('MainCtrl', function ($scope, Calculator) {

    function calculateExpirationDate(newVal, oldVal, scope) {
      if (scope.prorataCalculation.effectiveDate && scope.prorataCalculation.termInMonths) {
        var effDate = Date.create(scope.prorataCalculation.effectiveDate);
        scope.prorataCalculation.expirationDate = effDate.advance({months: scope.prorataCalculation.termInMonths}).format('{yyyy}-{MM}-{dd}');
      }
    }

    $scope.prorataCalculation = {
      termInMonths: 12,
      factorMethod: 'standard'
    };

    $scope.prorataResult = { };

    $scope.recalculate = function() {
      console.log('Recalculate Called...');

      var effDate    = Date.create(this.prorataCalculation.effectiveDate);
      var expDate    = Date.create(this.prorataCalculation.expirationDate);
      var cancelDate = Date.create(this.prorataCalculation.cancellationDate);

      $scope.prorataResult = Calculator.calculateProRata(effDate, expDate, cancelDate, this.prorataCalculation.premiumAmount, this.prorataCalculation.factorMethod);
    };

    $scope.$watch('prorataCalculation.effectiveDate', calculateExpirationDate );
    $scope.$watch('prorataCalculation.termInMonths', calculateExpirationDate );


  });
