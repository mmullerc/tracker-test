'use strict'
//Click service
;(function() {
  angular
    .module('trackerTestApp')
    .service('clickService',clickService);
    function clickService($http){
      var addClick = function(psection){
        console.log(psection);
        return $http.post('/tracker', psection);
      }
      var public_api = {
        addClick : addClick
      };
      return public_api;
    }
})();
