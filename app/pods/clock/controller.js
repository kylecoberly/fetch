import Ember from 'ember';
// controller name should be the same as model and route
export default Ember.Controller.extend({
  init: function(){
    // Update the time
    this.updateTime();
  },

  updateTime: function(){
    let _this = this;

    // Update the time every second
    Ember.run.later(function(){
      _this.set('localTime', new Date().toLocaleTimeString());
      _this.updateTime();
    }, 1000);
  },
  
  localTime: new Date().toLocaleTimeString()
});
