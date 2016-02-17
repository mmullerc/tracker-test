'use strict';

class NavbarController {
  //start-non-standard
  menu = [{'title': 'HOME','state': 'main'}, 
          {'title': 'CONTACT','state': 'contact'}, 
          {'title': 'CAREERS','state': 'careers'}, 
          {'title': 'ABOUT','state': 'about'}];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('trackerTestApp')
  .controller('NavbarController', NavbarController);
