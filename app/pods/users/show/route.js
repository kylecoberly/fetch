import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('user', params.user_id);
  },
  actions: {
    delete: function(user){
      var _this = this;

      user.destroyRecord().then(function(){
        _this.transitionTo('users.index');
      });
    }
  }
});

