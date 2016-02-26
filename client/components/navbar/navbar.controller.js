'use strict';

function NavbarController(clickService, $state) {
  var vmNav = this;
  var isCollapsed = true;

  vmNav.menu = [{'id': '2','title': 'HOME','state': 'home', 'content': 'Navbar Home'}, 
                {'id': '3','title': 'CONTACT','state': 'contact', 'content': 'Navbar Contact'}, 
                {'id': '4','title': 'CAREERS','state': 'careers', 'content': 'Navbar Careers'}, 
                {'id': '5','title': 'ABOUT','state': 'about', 'content': 'Navbar About'}];


  vmNav.logo = {'id':'1', 'src':'../assets/images/logo.png', 'content': 'Logo'};//Logo
  
  vmNav.register = function(p) {
   var state = '/' + $state.current.name;

   p.url = state;
   clickService.addClick(p);
  }
}

angular.module('trackerTestApp')
  .controller('NavbarController', NavbarController);
