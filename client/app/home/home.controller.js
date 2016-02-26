'use strict';

(function() {
angular.module('trackerTestApp')
 .controller('HomeController', HomeController);

 function HomeController(clickService) {
   var vmHome = this;
   vmHome.section1 = {'id':'1','url':'/home','content':'WELCOME'};//title
   vmHome.section2 = {'id':'2','url':'/home','content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};//subtitle
   vmHome.section3 = {'id':'3','url':'/home','content': 'Body image', 'src':'../assets/images/home.png'};//image
   vmHome.section4 = {'id':'4','url':'/home','content':'YOUR TEST'};
   vmHome.section5 = {'id':'2','url':'/home','content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};//subtitle
   vmHome.register = function(p) {
     clickService.addClick(p);
   }
  }
})();
