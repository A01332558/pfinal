import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),

	admin: DS.belongsTo('admin'),
	invent: DS.belongsTo('invent')
});
