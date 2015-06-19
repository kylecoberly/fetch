import UsersBaseController from './base';

export default UsersBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('users.index');
      return false;
    }
  }
});
