import DS from 'ember-data';

export default DS.Model.extend({
	total: DS.attr('number'),
	product: DS.attr('sting'),
	client: DS.belongsTo('client'),
	shop: DS.belongsTo('shop'),


});
