'use strict';

angular.module('trackerTestApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('about', {
      	url: '/about',
      	templateUrl: 'app/about/about.html',
      	controller: 'AboutController',
      	controllerAs: 'vmAbout'
      });
  });

      