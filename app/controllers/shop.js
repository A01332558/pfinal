import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions: {
		signOut(){
			return this.get("session").close().then(()=>{
				return this.transitionToRoute("/");
			});
		},
		goTo(opcion){
				switch(opcion){
					case "profile":
						return this.transitionToRoute("profile");
						break;
					case "artsearch":
						return this.transitionToRoute("artsearch");
						break;
					case "order":
						return this.transitionToRoute("order");
						break;
					case "shop":
						return this.transitionToRoute("shop");
						break;

				}
			},
		culminar(model){
			model.destroyRecord();
			return this.transitionToRoute("artsearch");
		},
		continuar(){
			return this.transitionToRoute("order");
		},
	},
});
