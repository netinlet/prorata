'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('prorataApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Calculator) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  //it('calculates the returnPremium', function() {
    //expect(scope.prorataResult.returnPremium).toEqual('TODO');
  //});

  //it('calculates the earnedPremium', function() {
    //expect(scope.prorataResult.earnedPremium).toEqual('TODO');
  //});

  //it('calculates the prorataRate', function() {
    //expect(scope.prorataResult.prorataRate).toEqual('TODO');
  //});

  //it('calculates the earnedDays', function() {
    //expect(scope.prorataResult.earnedDays).toEqual('TODO');
  //});

  //it('calculates the unearnedDays', function() {
    //expect(scope.prorataResult.unearnedDays).toEqual('TODO');
  //});


});
