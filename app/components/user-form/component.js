import Ember from 'ember';

export default Ember.Component.extend({
  user: null,
  routeAfterCancel: null,

  hasEmail: Ember.computed.notEmpty('user.email'),
  hasFirstName: Ember.computed.notEmpty('user.firstName'),
  hasLastName: Ember.computed.notEmpty('user.lastName'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName'
    ),
  actions: {
    save: function(){
      if (this.get('isValid')){
        let _this = this;
        this.get('user').save().then(function(user){
          _this.transitionToRoute('users.show', user);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
    cancel: function(){
      let nextRoute = this.get('routeAfterCancel');
      this.send('cancel', nextRoute, this.get('user'));
      return false;
    }
  }
});




