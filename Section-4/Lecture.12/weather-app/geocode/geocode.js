const request = require('request');

var geocodeAddress = (address, callback) => {
  encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
    }, (error, response, body) => {
      if (error) {
        callback('ERROR: Unable to connect to Google Servers');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find address');
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      };
  });
};

// Export as and what it's tied to
module.exports.geocodeAddress = geocodeAddress;
