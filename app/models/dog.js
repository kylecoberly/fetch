import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('string'),
  gender: DS.attr('string'),
  breed: DS.attr('string'),
  user: DS.belongsTo('user')
});

// can set a default value through ember data such as:
// 
  // breed: DS.attr('string', {
    // defaultValue: 'Alaskan Klee Kai'
  // })
