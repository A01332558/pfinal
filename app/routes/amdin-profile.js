import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend({
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
		console.log(this.store.find('admin', id));
		return this.store.find('admin', id);
		//return this.store.find('admin', 'r6s1s8Lw2wWCWkE8gdKvPwJaEwt2');
	},
});
