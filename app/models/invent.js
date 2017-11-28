import DS from 'ember-data';

export default DS.Model.extend({
	product: DS.attr('string'),
	amount: DS.attr('number'),
	price: DS.attr('number'),
	

	store: DS.belongsTo('store'),

});
