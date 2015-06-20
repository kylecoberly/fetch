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


// import Ember from 'ember';

// export default Ember.Component.extend({
//   user: null,
//   routeAfterCancel: null,

//   isValid: Ember.computed(
//     'user.email',
//     'user.firstName',
//     'user.lastName',
//     function(){
//       return !Ember.isEmpty(this.get('user.email')) &&
//       !Ember.isEmpty(this.get('user.firstName')) &&
//       !Ember.isEmpty(this.get('user.lastName'));
//     }),
//   actions: {
//     save: function(){
//       if (this.get('isValid')){
//         let _this = this;
//         this.get('user').save().then(function(user){
//           _this.transitionToRoute('users.show', user);
//         });
//       } else {
//         this.set('errorMessage', 'You have to fill all the fields');
//       }
//       return false;
//     },
//     cancel: function(){
//       let nextRoute = this.get('routeAfterCancel');
//       this.transitionToRoute(nextRoute, this.get('user'));
//       return false;
//     }
//   }
// });

