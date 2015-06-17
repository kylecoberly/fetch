import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('clock');
  this.route('clocks');
  this.route('timezones');
});

export default Router;
