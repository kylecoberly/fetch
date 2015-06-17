import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('user');
  }
});

//can also do:
// this.store.findQuery('user', {active: true})
// or
// this.store.find('user', 1)