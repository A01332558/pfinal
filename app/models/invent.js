import DS from 'ember-data';

export default DS.Model.extend({
	amount: DS.attr('number'),
	
	products : DS.hasMany('product'),
	//admin: DS.belongsTo('admin ')
});
