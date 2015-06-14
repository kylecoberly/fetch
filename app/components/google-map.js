import Ember from 'ember';

export default Ember.Component.extend({  
  insertMap: function() {
    let container = this.$('.map-canvas')[0];
        let options = {
            center: new window.google.maps.LatLng(
                this.get('latitude'),
                this.get('longitude')
            ),
            zoom: 15
        };
        new window.google.maps.Map(container, options);
    }.on('didInsertElement')
});
