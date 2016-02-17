'use strict';

angular.module('trackerTestApp', [
  'trackerTestApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .state('/')
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
