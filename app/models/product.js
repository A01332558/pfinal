import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	amount: DS.attr('number'),
	price: DS.attr('number'),
	// cat: DS.attr('array'),
	marca: DS.attr('string'),

	invent: DS.belongsTo('invent'),

});
