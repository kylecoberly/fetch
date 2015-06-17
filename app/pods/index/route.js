import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'user',
  model: function(){
    return this.user.find('user', 1);
  },
});
