import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroyProduct(){
			this.get('product').deleteRecord();
		}

	}


});
