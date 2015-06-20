// import the default value from ember-data into the variable DS.
// 
// Ember-Data exprts by default a namespace (known as DS) that exposes all the 
// classes and functions defined in http://emberjs.com/api/data

import DS from 'ember-data';
// Define the default export for this model, which will be a subclass 
// of DS.Model
// 
// After this class has been defined, we can import tis subclass doing:
// import User from 'fetch/models/user'
// 
// We can also use relative imports.  So if we were in another model we
// could have written
// import User from './user';
import Ember from 'ember';

export default DS.Model.extend({
  // Define a hasMany and belongsTo relationship between dogs and users 
  dogs: DS.hasMany('dog'),
  // DS.attr is the standard way to define attributes with Ember-Data
  firstName: DS.attr('string'),

  // Defines an attribute called lastName of type **string**
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() { 
    return this.get('firstName') + ' ' + this.get('lastName'); 
  })
});
