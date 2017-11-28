import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	tel: DS.attr('string'),
	addnum: DS.attr('string'),
	street: DS.attr('string'),
	mail: DS.attr('mail'),

	tickets: DS.hasMany('ticket'),


});
