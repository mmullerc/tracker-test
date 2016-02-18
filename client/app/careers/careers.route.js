'use strict';

angular.module('trackerTestApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('careers', {
        url: '/careers',
        templateUrl: 'app/careers/careers.view.html',
        controller: 'CareersCtrl',
        controllerAs: 'careers'
      });
  });
