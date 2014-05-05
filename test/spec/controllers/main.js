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

});
