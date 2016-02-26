//About controller
'use strict';
(function() {
angular.module('trackerTestApp')
  .controller('AboutController', AboutController);
  
  function AboutController(clickService) {
    var vmAbout = this;
    
    vmAbout.section1 = {'id': 1, 'count': 1, 'url':'/about','src':'About'};//title
    vmAbout.section2 = {'id': 2, 'count': 1, 'url':'/about','src':'About this test'};//subtitle
    vmAbout.section3 = {'id': 3, 'count': 1, 'url':'/about','src':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};
    vmAbout.section4 = {'id': 4, 'count': 1, 'url':'/about','src':'../assets/images/about.jpg'};//image
    vmAbout.section5 = {'id': 5, 'count': 1, 'url':'/about','src':'About the other test'};
    vmAbout.section6 = {'id': 6, 'count': 1, 'url':'/about','src':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};

    vmAbout.register = function(psection){
      clickService.addClick(psection)
      .success(function(data) {
        console.log(data);
      })
      .error(function(err) {
        console.log(err);
      });
    };
  }
  
})();
