import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
	session: Ember.inject.service(),
	beforeModel(){
		return this.get("session").fetch().catch(()=>{
			if(this.get("session.isAuthenticated")){
				return this.transitionTo("amdin-profile");
			}
		})
	}
});
