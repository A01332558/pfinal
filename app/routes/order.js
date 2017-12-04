import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend( AuthRoute, {
	session: Ember.inject.service(),
	model(){
		let id =this.get('session.uid');
		return this.store.find('client', id );
	}
});
