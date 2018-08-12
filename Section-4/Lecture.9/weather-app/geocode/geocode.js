const request = require('request');

var geocodeAddress = (address) => {
  encodedAddress = encodeURIComponent(address, callback);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
    }, (error, response, body) => {
      if (error) {
        callback('ERROR: Unable to connect to Google Servers'); // returns as error meessage as callback
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find address');
      } else if (body.status === 'OK') {
        // creating undefined as first as errorMessage is the first and results is the second
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      };
  });
};

// an object, this makes anything in this object available to any module that requires this file
module.export.geocodeAddress = geocodeAddress;
