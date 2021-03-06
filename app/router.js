import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('users', function() {
        this.route('new');
        this.route('show', { path: ':user_id' }, function() {
            this.route('dogs', function() {
                this.route('new');
            });
        });
        this.route('edit', { path: ':user_id/edit' });
    });
});

export default Router;
