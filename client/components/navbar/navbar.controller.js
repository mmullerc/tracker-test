'use strict';

function NavbarController(clickService, $state) {
  var vmNav = this;
  var isCollapsed = true;

  vmNav.menu = [{'id': 'nav1','title': 'HOME','state': 'home', 'content': 'Navbar Home'}, 
                {'id': 'nav2','title': 'CONTACT','state': 'contact', 'content': 'Navbar Contact'}, 
                {'id': 'nav3','title': 'CAREERS','state': 'careers', 'content': 'Navbar Careers'}, 
                {'id': 'nav4','title': 'ABOUT','state': 'about', 'content': 'Navbar About'},
                {'id': 'nav5','title': 'RESULTS','state': 'results', 'content': 'Navbar Results'}];


  vmNav.logo = {'id':'nav6', 'element': 'Logo'};//Logo
  
  vmNav.register = function(p) {
   var state = '/' + $state.current.name;

   p.url = state;
   clickService.addClick(p);
  };
}

angular.module('trackerTestApp')
  .controller('NavbarController', NavbarController);
