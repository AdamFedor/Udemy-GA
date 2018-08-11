const request = require('request');

//  error, response, body are exactly what's called in the documentation. Just using the same terms here.
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2)); // just print the body from the 3x arguments
    // since there is only 1 result, this looks at the first and at formatted address - per looking at it with JSON View
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
