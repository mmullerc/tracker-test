'use strict';

(function() {

class AdminCtrl {

  constructor() {
    var vm = this;
    vm.message = 'Hello';
    vm.labelsLeft = ['HOME', 'CONTACT', 'CAREERS', 'ABOUT'];
    vm.dataLeft = [100, 150, 200, 250];

    var myMap = new Map();
    var keyString = "a string",
        keyObj = {};

    // setting the values
    myMap.set(keyString, 'HOME');
    myMap.set(keyObj, {label: ['Title', 'Paragraph', 'Image'],
                      series: ['Series A'],
                      data: [[100, 90, 80]]});

    console.log('map: '+myMap.get(keyObj));

    vm.labelsRight = ['Title', 'Paragraph', 'Image'];
    vm.seriesRight = ['Series A'];

    vm.dataRight = [
      [100, 90, 80]
    ];

    vm.chartClick = function (chart) {

      if(chart[0].label == 'HOME'){
        vm.labelsRight = ['Title', 'Paragraph', 'Image'];
        vm.seriesRight = ['Series A'];

        vm.dataRight = [
          [100, 90, 80]
        ];
      }

      if(chart[0].label == 'CONTACT'){
        vm.labelsRight = ['Title', 'Paragraph', 'Image'];
        vm.seriesRight = ['Series A'];

        vm.dataRight = [
          [80, 95, 65]
        ];
      }

      if(chart[0].label == 'CAREERS'){
        vm.labelsRight = ['Title', 'Paragraph', 'Image'];
        vm.seriesRight = ['Series A'];

        vm.dataRight = [
          [23, 42, 11]
        ];
      }

      if(chart[0].label == 'ABOUT'){
        vm.labelsRight = ['Title', 'Paragraph', 'Image'];
        vm.seriesRight = ['Series A'];

        vm.dataRight = [
          [73, 54, 62]
        ];
      }

    };

    vm.click = function () {
      console.log(vm.dataRight);
    }
  }
}

angular.module('trackerTestApp')
  .controller('AdminCtrl', AdminCtrl);

})();
