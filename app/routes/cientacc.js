import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	model(){
		let id = this.get('id');
		return this.store.find('client', id);
	}
});
