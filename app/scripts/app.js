'use strict';

angular.module('prorataApp', [
  'ui.bootstrap',
  'ngRoute'
]).config(function($routeProvider) {
  $routeProvider.
    when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).
    otherwise({
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
});



