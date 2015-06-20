import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'dog.name',
    'dog.age',
    'dog.gender',
    'dog.breed', 
    function(){
      return !Ember.isEmpty(this.get('dog.name')) &&
      !Ember.isEmpty(this.get('dog.age')) &&
      !Ember.isEmpty(this.get('dog.gender')) &&
      !Ember.isEmpty(this.get('dog.breed'));
    }),
  actions: {
    save: function(){
      if (this.get('isValid')){
        let _this = this;
        this.get('dog').save().then(function(dog){
          _this.transitionToRoute('dogs.show', dog);
        });
      } else{
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
    cancel: function(){
      return false;
    }
  }
});