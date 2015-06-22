import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    //modelFor helps grab the model for any parent route
    return this.modelFor('users/show').get('users');
  },
  actions: {
    save: function(model){
      model.save();
      return false;
    }
  }
});