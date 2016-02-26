'use strict'
;(function(){

	angular.module('trackerTestApp')
   .controller('ContactCtrl', ContactCtrl);

   function ContactCtrl(clickService) {
   	//console.log(' dub');
     var vmContact = this;
     vmContact.title = {'id':'contact1','url':'/contact', 'element':'Contact title', 'src':'CONTACT'};
     vmContact.img = {'id':'contact2','url':'/contact', 'element':'Body Image', 'src':'../assets/images/flowers.png'};
     vmContact.facebook = {'id':'contact3','url':'/contact', 'element':'Facebook Link'};
     vmContact.twitter = {'id':'contact4','url':'/contact', 'element':'Twitter Link'};
     vmContact.linkedin = {'id':'contact5','url':'/contact', 'element':'Linkedin Link'};
     vmContact.sendButton = {'id':'contact6','url':'/contact', 'element':'Form'};
     

     vmContact.register = function(psection){
     clickService.addClick(psection);
   };
 }

})();

