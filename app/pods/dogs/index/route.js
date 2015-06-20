import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // modelFor helps grab the model for ay parent route
    return this.modelFor('users/show').get('dogs');
  }
});
