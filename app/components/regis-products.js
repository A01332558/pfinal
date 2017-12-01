import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'), //Para que funcione la funcion store
	actions:{
		save(){
			
			let invent = this.get('invent');
			
			// if( Ember.isBlank( invent.get('name')) ){
			// 	alert('el campo de nombre del producto no puede estar vacio');
			// 	return;
			// }
			
			invent.save().then(()=>{
					Ember.RSVP.all(invent.get('products').invoke('save')   ).then(()=>{ 
						alert('Ya se guardó');
						this.sendAction('didSave');
					})
				
			}); 
		},
		saveProduct(){
			
			let product = this.get('store').createRecord('product', {
				invent: this.get('invent'), // Enlazamos la actividad con el evento
			});
		},
	}
});
