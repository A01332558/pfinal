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
						}).catch((error)=>{
							console.log(error);
						})
						break;
				}
			},
		usuario(){
			this.transitionToRoute('/');
		},
		},


});
