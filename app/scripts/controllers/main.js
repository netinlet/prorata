'use strict';


angular.module('prorataApp')
.controller('MainCtrl', function ($scope, Calculator) {

  $scope.calculateExpirationDate = function() {
    if ($scope.prorataCalculation.effectiveDate && $scope.prorataCalculation.termInMonths) {
      var effDate = Date.create($scope.prorataCalculation.effectiveDate);
      $scope.prorataCalculation.expirationDate = effDate.advance({months: $scope.prorataCalculation.termInMonths}).format('{yyyy}-{MM}-{dd}');
    }
  }

  $scope.prorataCalculation = {
    termInMonths: 12,
    factorMethod: 'standard'
  };

  $scope.calculateTermInMonths = function() {
    if ($scope.prorataCalculation.effectiveDate && $scope.prorataCalculation.expirationDate) {
      var effDate = Date.create($scope.prorataCalculation.effectiveDate);
      var expDate = Date.create($scope.prorataCalculation.expirationDate);
      $scope.prorataCalculation.termInMonths = expDate.monthsSince(effDate);
    }

  };

  $scope.prorataResult = { };

  $scope.recalculate = function() {
    console.log('Recalculate Called...');

    var effDate    = Date.create($scope.prorataCalculation.effectiveDate);
    var expDate    = Date.create($scope.prorataCalculation.expirationDate);
    if ($scope.prorataCalculation.cancellationDate) {
      var cancelDate = Date.create($scope.prorataCalculation.cancellationDate);
    }
    $scope.prorataResult = Calculator.calculateProRata(effDate, expDate, cancelDate, $scope.prorataCalculation.premiumAmount, $scope.prorataCalculation.factorMethod);
  };

});
