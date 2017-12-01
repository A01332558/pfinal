import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroyProducto(){
			this.get('product').destroyRecord();
		}

	}


});
