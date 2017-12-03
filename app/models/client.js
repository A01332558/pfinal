import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	sname: DS.attr('string'),
	phone: DS.attr('string'),
	addnum: DS.attr('string'),
	street: DS.attr('string'),
	email: DS.attr('string'),

	tickets: DS.hasMany('ticket'),
	adminstore: DS.belongsTo('adminstore'),
});
