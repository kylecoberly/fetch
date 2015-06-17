import Ember from 'ember';
// controller name should be the same as model and route
export default Ember.Controller.extend({
  // special Ember method that runs when controller is initialized
  init: function(){
    // Update the time
    this.updateTime();
  },

  updateTime: function(){
    let _this = this;

    // Update the time every second after 1000ms
    Ember.run.later(function(){
      //new value is set to localTime
      _this.set('localTime', new Date().toLocaleTimeString());
      _this.updateTime();
    }, 1000);
  },

  localTime: new Date().toLocaleTimeString()
});
