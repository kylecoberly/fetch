import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  state: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  sorted_locations: (function(){
    return this.get('locations').sortBy('city');
  }).property('locations.@each.city'),
});
