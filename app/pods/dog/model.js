import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('string'),
  gender: DS.attr('string'),
  breed: DS.attr('string'),
  user: DS.belongsTo('user')
});
