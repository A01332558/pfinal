import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
	session: Ember.inject.service(),

	beforeModel(){
		return this.get("session").fetch().catch(()=>{
			if(this.get("session.isAuthenticated")){
				// return this.transitionTo("profile");
			}else{
				return this.transitionTo("/");
			}
		})
	},

	model(){
		let id = this.get('session.uid');
		return this.store.find('client', id);
	}
});
