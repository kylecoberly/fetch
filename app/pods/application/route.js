import Ember from 'ember';
//takes place of App.IndexRoute =
export default Ember.Route.extend({
  model: function() {
    return {
      locations: [

      Ember.Object.create({ name: 'Denver, CO', latitude: 39.7392, longitude: -104.9903 }),
      Ember.Object.create({ name: 'New York City, NY', latitude: 40.71427 , longitude: -74.00597 }),
      Ember.Object.create({ name: 'Pittsburgh, PA', latitude: 40.4411, longitude: -79.9961 }),
      Ember.Object.create({ name: 'Los Angeles, CA', latitude: 40.6643, longitude: -118.4108 }),
      Ember.Object.create({ name: 'Chicago, IL', latitude: 41.8376, longitude: -87.6818 }),
      Ember.Object.create({ name: 'Houston, TX', latitude: 29.7805, longitude: -95.3863 }),
      Ember.Object.create({ name: 'Philadelphia, PA', latitude: 40.0094, longitude: -75.1333 }),
      Ember.Object.create({ name: 'Phoenix, AZ', latitude: 33.5722, longitude: -112.0880}),
      Ember.Object.create({ name: 'San Antonio, TX', latitude: 29.4724, longitude: -98.5251 }),
      Ember.Object.create({ name: 'San Diego, CA', latitude: 32.8153, longitude: -117.1350 }),
      Ember.Object.create({ name: 'Dallas, TX', latitude: 32.7757, longitude: -96.7967 }),
      Ember.Object.create({ name: 'San Jose, CA', latitude: 37.2969, longitude: -121.8193 }),
      Ember.Object.create({ name: 'Austin, TX', latitude: 30.3072, longitude: -97.7560 }),
      Ember.Object.create({ name: 'Jacksonville, FL', latitude: 30.3370, longitude: -97.7560 }),
      Ember.Object.create({ name: 'San Francisco, CA', latitude: 37.7751, longitude: -122.4193 }),
      Ember.Object.create({ name: 'Indianapolis, IN', latitude: 39.7767, longitude: -86.1459 }),
      Ember.Object.create({ name: 'Columbus, OH', latitude: 39.9848, longitude: -82.9850 }),
      Ember.Object.create({ name: 'Fort Worth, TX', latitude: 32.7795, longitude: -97.3463 }),
      Ember.Object.create({ name: 'Charlotte, NC', latitude: 35.2087, longitude: -97.3463 }),
      Ember.Object.create({ name: 'Detroit, MI', latitude: 42.3830, longitude: -83.1022 }),
      Ember.Object.create({ name: 'El Paso, TX', latitude: 31.8484, longitude: -106.4270 }),
      Ember.Object.create({ name: 'Seattle, WA', latitude: 47.6205, longitude: -122.3509 }),
      Ember.Object.create({ name: 'Washington, D.C.', latitude: 39.9041, longitude: -77.0171 }),
      Ember.Object.create({ name: 'Memphis, TN', latitude: 35.1035, longitude: -89.9785 }),
      Ember.Object.create({ name: 'Boston, MA', latitude: 42.3320, longitude: -71.0202 }),
      Ember.Object.create({ name: 'Nashville, TN', latitude: 39.3002, longitude: -76.6105 }),
      ],
      markers: [
        Ember.Object.create({ latitude: 39.7392, longitude: -104.9903 }), //Denver
        Ember.Object.create({ latitude: 40.71356, longitude: -74.00632 }), // New York
        Ember.Object.create({ latitude: 40.4411, longitude: -79.9961 }), // Pittsburgh
        Ember.Object.create({ latitude: 40.6643, longitude: -118.4108 }), //LA
        Ember.Object.create({ latitude: 41.8376, longitude: -87.6818 }),//Chicago
        Ember.Object.create({ latitude: 29.7805, longitude: -95.3863 }), //Houston
        Ember.Object.create({ latitude: 40.0094, longitude: -75.1333 }), //Philadephia
        Ember.Object.create({ latitude: 33.5722, longitude: -112.0880}), //Phoenix
        Ember.Object.create({ latitude: 29.4724, longitude: -98.5251 }), //San Antonio
        Ember.Object.create({ latitude: 32.8153, longitude: -117.1350 }), //San Diego
        Ember.Object.create({ latitude: 32.7757, longitude: -96.7967 }), //Dallas
        Ember.Object.create({ latitude: 37.2969, longitude: -121.8193 }), //San Jose
        Ember.Object.create({ latitude: 30.3072, longitude: -97.7560 }), //Austin
        Ember.Object.create({ latitude: 30.3370, longitude: -97.7560 }), //Jackson
        Ember.Object.create({ latitude: 37.7751, longitude: -122.4193 }), //San Francisco
        Ember.Object.create({ latitude: 39.7767, longitude: -86.1459 }), //Indianapolis
        Ember.Object.create({ latitude: 39.9848, longitude: -82.9850 }), //Columbus
        Ember.Object.create({ latitude: 32.7795, longitude: -97.3463 }), //Fort Worth
        Ember.Object.create({ latitude: 35.2087, longitude: -97.3463 }), //Charlotte
        Ember.Object.create({ latitude: 42.3830, longitude: -83.1022 }), //Detroit
        Ember.Object.create({ latitude: 31.8484, longitude: -106.4270 }), //El Paso
        Ember.Object.create({ latitude: 47.6205, longitude: -122.3509 }), //Seattle
        Ember.Object.create({ latitude: 39.9041, longitude: -77.0171 }), //Washington DC
        Ember.Object.create({ latitude: 35.1035, longitude: -89.9785 }), //Memphis 
        Ember.Object.create({ latitude: 42.3320, longitude: -71.0202 }), //Boston
        Ember.Object.create({ latitude: 39.3002, longitude: -76.6105 }), //Nashville
        ]
      };
    },
  // extending default route with redirect method that forwards any
  // requests for the root to the clock using transitionTo
  redirect: function(){
    this.transitionTo('clock');
  }
});