'use strict'

	angular
		.module('trackerTestApp')
		.config(function($stateProvider) {
      $stateProvider
      	.state('contact', {
	        url: '/contact',
	        templateUrl: 'app/contact/contact.view.html',
	        controller: 'ContactCtrl',
	        controllerAs: 'contact'
      });
	});