import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	tel: DS.attr('string'),
	mail: DS.attr('mail'),

});
