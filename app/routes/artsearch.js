import Ember from 'ember';

export default Ember.Route.extend({
	
	model(){
		let id="invent1";
		return this.store.find('invent', id);
	}
});
