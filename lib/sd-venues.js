var https = require('https');
var querystring = require('querystring');

var Foursquare = function() {

};

Foursquare.prototype.venues = function(params, callback) {
  var defaultParams = {
    ll: params.lat + ',' + params.lng,
    limit: params.limit || 50,
    m: params.m || 'foursquare',
    intent: params.intent || 'browse',
    radius: params.radius || 600,
    v: params.v || '20140806',
    client_id: process.env.FOURSQUARE_ID || params.client_id,
    client_secret: process.env.FOURSQUARE_SECRET || params.client_secret
  };

  return https.get({
        host: 'api.foursquare.com',
        path: '/v2/venues/search?' + querystring.stringify(defaultParams)
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            callback(parsed);
        });
    });
}

module.exports = new Foursquare();
