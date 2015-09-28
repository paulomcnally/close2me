var foursquare = require('../lib/sd-venues');

foursquare.venues({
  lat: 12.1941957,
  lng: -86.0990518
}, function(data) {
  console.log(JSON.stringify(data, null, 2));
});
