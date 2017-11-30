import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	tel: DS.attr('string'),
	email: DS.attr('string'),
	admin: DS.attr('boolean'),

});
