import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('user');
  },
  actions: {
    delete: function(user){
      user.destroyRecord();
      return false;
    }
  }
});

//can also do:
// this.store.findQuery('user', {active: true})
// or
// this.store.find('user', 1)