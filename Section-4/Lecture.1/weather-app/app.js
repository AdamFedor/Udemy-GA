const request = require('request');

//  error, response, body are exactly what's called in the documentation. Just using the same terms here.
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
  }, (error, response, body) => {
    console.log(body); // just print the body from the 3x arguments
});
