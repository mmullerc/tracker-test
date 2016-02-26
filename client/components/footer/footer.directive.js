'use strict';

angular.module('trackerTestApp')
  .directive('footer', () => ({

    templateUrl: 'components/footer/footer.html',
    restrict: 'E',
    controller: 'FooterController',
    controllerAs: 'footer'

  }));
