//Click service
;(function() {
  angular
    .module('trackerTestApp')
    .service('clickService',clickService);
    function clickService($http){
      var addClick = function(psection){
        console.log(psection.id);
        console.log(psection.content);
        console.log(psection.url);
        //return $http.post('http://localhost:3000/api/click/',psection);
      }
      var public_api = {
        addClick : addClick
      };
      return public_api;
    }
})();
