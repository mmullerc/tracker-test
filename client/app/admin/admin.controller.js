'use strict';

(function() {

class AdminCtrl {

  constructor() {
    this.message = 'Hello';
    this.labelsLeft = ['HOME', 'CONTACT', 'CAREERS', 'ABOUT'];
    this.dataLeft = [100, 150, 200, 250];

    this.labelsRight = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.seriesRight = ['Series A', 'Series B'];

    this.dataRight = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

  }
}

angular.module('trackerTestApp')
  .controller('AdminCtrl', AdminCtrl);

})();
