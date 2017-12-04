import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	actions: {
		sigIn(provider){
				// Codigo para iniciar sesión
				switch(provider){
					case 'facebook':
						this.get('session').open('firebase', {provider: 'facebook'}).then(()=>{
							// El inicio funcionó
							if(this.get("session.isAuthenticated")){
								return this.transitionToRoute("profile");
							}
								else{
									return this.transitionToRoute("/");
								}
						}).catch(()=>{
							// Falló el inicio
							// debugger
							if(this.get("session.isAuthenticated")){
								return this.transitionToRoute("profile");
							}
								else{
									return this.transitionToRoute("/");
								}
						})
					break;
					// case 'twitter':
					// 	this.get('session').open('firebase', {provider: 'twitter'}).then(()=>{
					// 		// El inicio funcionó
					// 		if(this.get("session.isAuthenticated")){
					// 			return this.transitionToRoute("profile");
					// 		}
					// 			else{
					// 				return this.transitionToRoute("/");
					// 			}
					// 	}).catch(()=>{
					// 		// Falló el inicio
					// 		// debugger
					// 		if(this.get("session.isAuthenticated")){
					// 			return this.transitionToRoute("profile");
					// 		}
					// 			else{
					// 				return this.transitionToRoute("/");
					// 			}
					// 	})
					// break;
					case 'google':
						this.get('session').open('firebase', {provider: 'google'}).then(()=>{
							// El inicio funcionó
							if(this.get("session.isAuthenticated")){
								return this.transitionToRoute("profile");
							}
								else{
									return this.transitionToRoute("/");
								}
						}).catch(()=>{
							// Falló el inicio
							// debugger
							if(this.get("session.isAuthenticated")){
								return this.transitionToRoute("profile");
							}
								else{
									return this.transitionToRoute("/");
								}
						})
					break;
					case 'email':
					

						this.get('session').open('firebase', {
							provider: 'password',
							email: this.get('email'),
							password: this.get('password')
						}).then(()=>{
							return this.transitionToRoute('profile');
						}).catch(()=>{
							window.swal({
							  title: '¡Error!',
							  text:'Usuario o contraseña incorrectos.',
							  type:'error',
							})
						})
						break;
				}


		},
		Registrate(){
			this.transitionToRoute('registration');
		},
		admin(){
			this.transitionToRoute('amdin-login');
		}
	},
});
