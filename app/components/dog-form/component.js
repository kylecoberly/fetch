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
    autoSave: function(){
      let dog = this.get('dog');
      if (!dog.get('isNew')){
        this.sendAction('save', dog);
      }
    },
    stateChanged: Ember.on('init', Ember.observer('dog.id', function(){
      let dog = this.get('dog');
      // checking to see that it is saving or not 
      if (dog.get('isDirty') && !dog.get('isSaving')){
        // since observers are synchronous, guarantees the fxn passed will be called only once
        // during running loop(observer still called twice)
        Ember.run.once(this, this.autoSave);
      }
    }))
  }
});


// actions: {
//     save: function(){
//       if (this.get('isValid')){
//         let _this = this;
//         this.get('dog').save().then(function(dog){
//           _this.transitionToRoute('dogs.show', dog);
//         });
//       } else{
//         this.set('errorMessage', 'You have to fill all the fields');
//       }
//       return false;
//     },
//     cancel: function(){
//       return false;
//     }
//   }
// });