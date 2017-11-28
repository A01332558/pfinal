import DS from 'ember-data';

export default DS.Model.extend({

	admin: DS.belongsTo('admin'),
	tickets: DS.hasMany('ticket'),

});
