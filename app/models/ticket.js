import DS from 'ember-data';

export default DS.Model.extend({
	total: DS.attr('number'),
	

	client: DS.belongsTo('client'),
	products: DS.hasMany('product'),
});
