'use strict';

/**
 * @ngdoc overview
 * @name openshiftApp
 * @description
 * # openshiftApp
 *
 * Main module of the application.
 */
angular
  .module('openshiftApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularCharts',
    'ui.bootstrap-slider'
  ])
  .controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return $location.path() === viewLocation;
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/years', {
        templateUrl: 'views/years.html',
        controller: 'YearController'
      })
      .when('/data', {
        templateUrl: 'views/data.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
