'use strict';

(function() {
angular.module('trackerTestApp')
 .controller('HomeController', HomeController);

 function HomeController(clickService) {
   var vmHome = this;
   vmHome.section1 = {'id':'home-1','url':'/home', 'element': 'Welcome title','src':'WELCOME'};//title
   vmHome.section2 = {'id':'home-2','url':'/home', 'element': 'Paragraph 1','src':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};//subtitle
   vmHome.section3 = {'id':'home-3','url':'/home', 'element': 'Body image', 'src':'../assets/images/home.png'};//image
   vmHome.section4 = {'id':'home-4','url':'/home', 'element': 'Your Test title','src':'YOUR TEST'};
   vmHome.section5 = {'id':'home-5','url':'/home', 'element': 'Paragraph 2','src':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};//subtitle
   vmHome.register = function(p) {
     clickService.addClick(p);
   }
  }
})();
