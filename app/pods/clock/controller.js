import Ember from 'ember';
// controller name should be the same as model and route
export default Ember.Controller.extend({
  localTime: new Date().toLocaleTimeString()
});
