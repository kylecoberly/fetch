import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    //store is Ember-Data class in charge of managaging 
    // everthing related to model's data
    return this.store.createRecord('user');
  }
});
