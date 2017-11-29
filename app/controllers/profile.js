import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions: {
		signOut(){
			return this.get("session").close().then(()=>{
				return this.transitionToRoute("/");
			});
		}
	}
});
