'use strict';

(function() {

class AdminCtrl {

  constructor(clickService) {
    var vm = this;
    vm.label = 'HOME';
    vm.labelsLeft = ['HOME', 'CONTACT', 'CAREERS', 'ABOUT'];
    

    let home = {};
    let contact = {};
    let careers = {};
    let about = {};

    clickService.getAll()
      .success(function(data) {
        home = getInfoHome(data);
        contact = getInfoContact(data);
        careers = getInfoCareers(data);
        about = getInfoAbout(data);

        vm.labelsRight = home.ids;
        vm.seriesRight = ['Series A'];

        vm.dataRight = [
          home.counts
        ];

        sumAll(home.counts , contact.counts , careers.counts , about.counts);     

      })
      .error(function(err) {
        console.log(err);
      });

    
      function sumAll(...arr) {
        vm.dataLeft = [];
        for (var i = 0; i < arr.length ; i++) {
          let sum = 0;
          arr[i].map(n => {sum = sum + n});
          vm.dataLeft[i] = sum;
        }
      }
    

    vm.chartClick = function (chart) {
      vm.label = chart[0].label;
      if(chart[0].label == 'HOME'){
        if(home.ids.length != 0) {
          vm.labelsRight = home.ids;
          vm.seriesRight = ['Series A'];

          vm.dataRight = [
            home.counts
          ];
        }
      }

      if(chart[0].label == 'CONTACT'){
        if(contact.ids.length != 0) {
          vm.labelsRight = contact.ids;
          vm.seriesRight = ['Series A'];

          vm.dataRight = [
            contact.counts
          ];
        }
      }

      if(chart[0].label == 'CAREERS'){
        if(careers.ids.length != 0) {
          vm.labelsRight = careers.ids;
          vm.seriesRight = ['Series A'];

          vm.dataRight = [
            careers.counts
          ];
        }
        
      }

      if(chart[0].label == 'ABOUT'){
        if(about.ids.length != 0) {
          vm.labelsRight = about.ids;
          vm.seriesRight = ['Series A'];

          vm.dataRight = [
            about.counts
          ];
        }
      }

    };

    vm.click = function () {
      console.log(vm.dataRight);
    }

    function getInfoContact(data){
      var contact = [];
      var contactIds = [];
      var contactCount = [];

      for(let i=0; i<data.length; i++){
        if(data[i].url == '/contact'){
          contact.push(data[i]);
        }
      }
      for(let i=0; i<contact.length; i++){
        contactIds.push(contact[i].id);
      }
      for(let i=0; i<contact.length; i++){
        contactCount.push(contact[i].count);
      }

      return {
        ids: contactIds,
        counts: contactCount
      };
    }

    function getInfoHome(data){
      let home = [];
      let homeIds = [];
      let homeCount = [];

      for(let i=0; i<data.length; i++){
        if(data[i].url == '/home'){
          home.push(data[i]);
        }
      }
      for(let i=0; i<home.length; i++){
        homeIds.push(home[i].id);
      }
      for(let i=0; i<home.length; i++){
        homeCount.push(home[i].count);
      }

      return {
        ids: homeIds,
        counts: homeCount
      };
    }

    function getInfoCareers(data){
      let careers = [];
      let careersIds = [];
      let careersCount = [];

      for(let i=0; i<data.length; i++){
        if(data[i].url == '/careers'){
          careers.push(data[i]);
        }
      }      
      for(let i=0; i<careers.length; i++){
        careersIds.push(careers[i].id);
      }
      for(let i=0; i<careers.length; i++){
        careersCount.push(careers[i].count);
      }
      
      return {
        ids: careersIds,
        counts: careersCount
      };
    }

    function getInfoAbout(data){
      let about = [];
      let aboutIds = [];
      let aboutCount = [];

      for(let i=0; i<data.length; i++){
        if(data[i].url == '/about'){
          about.push(data[i]);
        }
      }
      if(about != 'undefined'){
        for(let i=0; i<about.length; i++){
          aboutIds.push(about[i].id);
        }
        for(let i=0; i<about.length; i++){
          aboutCount.push(about[i].count);
        }
      }
      
      return {
        ids: aboutIds,
        counts: aboutCount
      };
    }
  }

}

angular.module('trackerTestApp')
  .controller('AdminCtrl', AdminCtrl);

})();
