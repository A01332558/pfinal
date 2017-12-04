import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	actions: {
		sigIn(provider){
			switch(provider){
					case 'email':
						this.get('session').open('firebase', {
							provider: 'password',
							email: this.get('emailadmin'),
							password: this.get('passwordadmin')
						}).then(()=>{
							return this.transitionToRoute('amdin-profile');
						}).catch(()=>{
							window.swal({
							  title: '¡Error!',
							  text:'Usuario o contraseña del administrador incorrectos.',
							  type:'error',
							})
						})
						break;
				}
			},
		usuario(){
			this.transitionToRoute('/');
		},
		},


});
