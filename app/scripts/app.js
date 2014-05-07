'use strict';

angular.module('prorataApp', [
  'ui.bootstrap',
  'ngRoute'
]).config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!'); // use #! for better seo
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
});



