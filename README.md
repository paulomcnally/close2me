# sd-venues

Venues from Foursquare close to me

## Required

    process.env.FOURSQUARE_ID
    process.env.FOURSQUARE_SECRET

## Example

    var foursquare = require('sd-venues');

    foursquare.venues({
      lat: 12.1941957,
      lng: -86.0990518
    }, function(data) {
      console.log(JSON.stringify(data, null, 2));
    });


## More info

https://developer.foursquare.com/docs/venues/search
