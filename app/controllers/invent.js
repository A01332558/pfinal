import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions:{
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
			signOut(){
			return this.get("session").close().then(()=>{
				return this.transitionToRoute("amdin-login");
			});
		},
	}
});
