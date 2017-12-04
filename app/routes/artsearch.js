import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
	session: Ember.inject.service(),	
	model(){
		return this.store.findAll('product');
	}
});
