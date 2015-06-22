import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    //store is Ember-Data class in charge of managaging 
    // everthing related to model's data
    return this.store.createRecord('user');
  },
  actions: {
    save: function(){
      console.log('+-- save action bubbled up to users new route');

      return true;
    },
    cancel: function(route, user){
      this.transitionTO(route, user);
      console.log('+-- cancel action bubbled up to users new route');
    }
  }
});
