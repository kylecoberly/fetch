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
      console.log('+- save action in users new controller');
      return true;
    },
    cancel: function(){
      console.log('+- cancel action in users new controller');
      return true;
    }
  }
});
