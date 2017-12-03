import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions: {
		signOut(){
			return this.get("session").close().then(()=>{
				return this.transitionToRoute("amdin-login");
			});
		},
		goTo(opcion){
			switch(opcion){
				case "info":
					return this.transitionToRoute("amdin-profile");
					break;
				case "invent":
					return this.transitionToRoute("invent");
					break;
				case "pedidos":
					return this.transitionToRoute("orders");
					break;
				case "adminacc":
					return this.transitionToRoute("cientacc");
					break;

			}
		},
		destroyClient(){
			let id = this.get('client.id');
			this.get('client').destroyRecord(id);
		}
	},
});
