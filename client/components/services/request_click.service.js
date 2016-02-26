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
      };

      var getAll = function(){
        return $http.get('/all');
      };

      var public_api = {
        addClick : addClick,
        getAll : getAll
      };

      return public_api;
    }
})();
