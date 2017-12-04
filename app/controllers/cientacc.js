import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	firebaseApp: Ember.inject.service(),
	actions: {
		signOut(){
			return this.get("session").close().then(()=>{
				return this.transitionToRoute("amdin-login");
			});
		},
		goTo(opcion){
			switch(opcion){
				case "info":
					return this.transitionToRoute("amdin-profile");
					break;
				case "invent":
					return this.transitionToRoute("invent");
					break;
				case "pedidos":
					return this.transitionToRoute("orders");
					break;
				case "adminacc":
					return this.transitionToRoute("cientacc");
					break;

			}
		},
		destroyClient(client){
			  window.swal({
				  title: '¿Estas seguro?',
				  text: "No podrás realizar cambios",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Si, borrar',
				  cancelButtonText: 'Cancelar'
				}).then((result) => {
				    if(result.value)	{
				    	window.swal({
						  title: '¡Borrado!',
					      text: 'La cuenta se ha borrado.',
					      type: 'success'
					    }).then(()=>{
					    	client.destroyRecord();
					    });
				    }
				})
			
			
			// var user = firebaseApp.auth().currentUser;

			// 	user.delete().then(function() {
			// 	  // User deleted.
			// 	  window.swal({
			// 		title: '¡Listo!',
			// 		text: 'Se ha borrado exitosamente',
			// 		confirmButtonText: 'Continuar',
			// 		type: 'success',
			// 	})
			// 	}).catch(function(error) {
			// 	  // An error happened.
			// 	});
		}
	},
});
