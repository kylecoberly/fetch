import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName', 
    function(){
      return !Ember.isEmpty(this.get('model.email')) &&
      !Ember.isEmpty(this.get('model.firstName')) &&
      !Ember.isEmpty(this.get('model.lastName'));
    }),
  actions: {
    save: function(){
      if (this.get('isValid')){
        // needed because scope is different inside the function
        var _this = this;
        // return of .save() is a promise 
        // .then receives a fxn that will be called when model is saved to server
        // returns an instance and then we can go to user show page
        this.get('model').save().then(function(user) {
          _this.transitionToRoute('users.show', user);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
    cancel: function(){
      this.transitionToRoute('users');
      return false;
    }
  }
});
