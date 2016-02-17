'use strict';

angular.module('trackerTestApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.view.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      });
  });
