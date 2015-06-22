import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('user');
  },
  actions: {
    // also need to update user show to support action
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