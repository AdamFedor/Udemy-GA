const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {// this needs to wrap at a top level for this to work
    encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
      }, (error, response, body) => {
        if (error) {
          reject('ERROR: Unable to connect to Google Servers');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find address');
        } else if (body.status === 'OK') {
          // resolve(body.results);
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        };
      });
  });
};

geocodeAddress('98272').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
