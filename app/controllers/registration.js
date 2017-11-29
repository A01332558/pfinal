import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	firebaseApp: Ember.inject.service(),

	showError(message){
		// this.set('errorMsg', message);
		// setTimeout(()=>{
		// 	this.set('errorMsg', null)
		// }, 5000); // 1000 == 1 seg
		window.swal({
			title: '¡ERROR!',
			text: message,
			confirmButtonText: 'Corregir',
			type: 'error',
		})
	},

	actions: {
		registrar(){
			let email = this.get('email');
			let password = this.get('password');
			let confirmation = this.get('passwordConfirmation');
			let name = this.get('name');
			let sname = this.get('sname');
			let phone = this.get('phone');
			let addnum = this.get('addnum');
			let street = this.get('street');
			if (password == confirmation){
				let registrationPromise = this.get('firebaseApp').auth().createUserWithEmailAndPassword(
					email,
					password
				);
				registrationPromise.then((response)=>{
					this.store.createRecord('client', {
						name: name,
						sname: sname,
						phone: phone,
						addnum: addnum,
						street: street,

						//addnum: DS.attr('string'),
						id: response.uid}).save().then(()=>{
						window.swal({
							title: '¡Registrado!',
							text: 'Te registraste exitosamente',
							confirmButtonText: 'Continuar'
						}).then(()=>{
							this.transitionToRoute('profile');
						});
					});
				});
				registrationPromise.catch((error)=>{
					this.showError(error.message);
				});
			}else{
				this.showError("Las contraseñas no coinciden");
			}
		},
	}
});
