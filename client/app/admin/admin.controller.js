'use strict';

(function() {

class AdminCtrl {

  constructor() {
    this.message = 'Hello';
    this.labels = ["HOME", "CONTACT", "CAREERS", "ABOUT"];
    this.data = [100, 150, 200, 250];

  }
}

angular.module('trackerTestApp')
  .controller('AdminCtrl', AdminCtrl);

})();
