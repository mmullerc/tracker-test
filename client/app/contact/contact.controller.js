'use strict'
;(function(){

	// class ContactCtrl{

	// 	constructor(){}
	// }

	// angular.module('trackerTestApp')
	// 	.controller('ContactCtrl', ContactCtrl);
	angular.module('trackerTestApp')
   .controller('ContactCtrl', ContactCtrl);

   function ContactCtrl() {
     var vm = this;
     vm.DoSomething = 'Don\'t scream';
     console.log(vm.DoSomething);
   };


})();

// ;(function () {
//   app.module('trackerTestApp')
//     .controller('ContactCtrl', ContactCtrl);

//     function ContactCtrl() {
//       var vm = this;
//       vm.DoSomething = 'Don\'t scream';
//       console.log(vm.DoSomething);
//     }
// })();	