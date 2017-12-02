import DS from 'ember-data';

export default DS.Model.extend({
	clients: DS.hasMany('client'),
});
