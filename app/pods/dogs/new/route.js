import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // creates a new instance of a model in the store
    return this.store.createRecord('dog', {
      user: this.modelFor('users/show')
    });
  },
  actions: {
    save: function(){
      var _this = this;
      var model = this.modelFor('dogs/new');

      model.save().then(function(){
        _this.transitionTo('dogs');
      });
    },
    cancel: function(){
      this.transitionTo('dogs');
    }
  }
});

