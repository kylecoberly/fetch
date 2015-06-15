import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var container = this.$('.map-canvas');


    var options = {
      // centers map on selected lat and lng
      center: new window.google.maps.LatLng(
        this.get('latitude'),
        this.get('longitude')
        ),
      zoom: 15,
      // prevents from scrolling to zoom in and out
      scrollwheel: false
    };
    this.set('map', new window.google.maps.Map(container[0], options));
    this.set('markerCache', []);
    this.setMarkers();
  }.on('didInsertElement'),
    coordinatesChanged: function() {
      var map = this.get('map');

      if (map) {
        map.setCenter(new window.google.maps.LatLng(
          this.get('latitude'), 
          this.get('longitude')
          ));
      }
    }.observes('latitude', 'longitude'),
    setMarkers: function() {
      var map = this.get('map');
      var markers = this.get('markers');
      var markerCache = this.get('markerCache');

      markerCache.forEach(function(marker) { marker.setMap(null); 
      }); // Remove all existing markers
      markers.forEach(function(marker){
      var gMapsMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(marker.get('latitude'), 
          marker.get('longitude')),
        map: map
    });
        markerCache.pushObject(gMapsMarker); //Add this marker to the cache
      }, this);
      //generates markers everytime the lat and long are changed 
    }.observes('markers.@each.latitude', 'markers.@each.longitude')
  });