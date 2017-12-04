import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	store: Ember.inject.service('store'),
	// productoBuscado: 'leche',
	compra: false,
	ticket: {
		total: 0,
		client: "",
		products: [],
	},
	ticketId: "",
	// filteredModel: Ember.computed.filter('model', function(item, index){
	// 	return item.get('name') == this.get('productoBuscado');
	// }),
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
			// buscar(){
			// 	let x = document.getElementById("Buscar").value;
			// 	console.log(this.get('productoBuscado'))
			// 	this.set('productoBuscado', x);
			// 	console.log(this.get('productoBuscado'))
			// },
			inciarCompra(){
				this.set('compra', true);
				let tick = this.get('store').createRecord('ticket', this.get('ticket'));
				tick.set('client', this.get('session.uid'));
				tick.save();
				let id = this.get('session.uid');
				this.get('store').find('client', id).then((c)=>{
					tick.set('client', c.id);
					tick.save();
					c.get('tickets').pushObject(tick);
					c.save();
				})
				this.set('ticketId', tick.id);
			},
			addshop(id){
				this.get('store').find('product', id).then((p)=>{
					this.get('store').find('ticket', this.get('ticketId')).then((tick)=>{
						tick.get('products').pushObject(p);
						tick.set('total', tick.get('total') + p.get('price')); 
						tick.save();
					})
				});	

			},
			continuar(){
				this.set('compra', false);
				return this.transitionToRoute("shop", this.get('ticketId'));

			},

	},
	
});
