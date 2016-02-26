'use strict';

angular.module('trackerTestApp')
  .controller('FooterController', FooterController);

FooterController.$inject = ['clickService', '$state'];

function FooterController(clickService, $state) {

  var footer = this;
  footer.text = 'Lorem ipsum dolor sit amet';

  footer.trackData = function(){

    var psection = {'id':'1001','url':$state.current.name,'src':'footer','content':footer.text};

    clickService.addClick(psection);
  };

}//end
