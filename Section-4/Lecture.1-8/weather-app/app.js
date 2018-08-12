const request = require('request');
const yargs = require('yargs');

// .options lets configure top level options
const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'The address to fetch the weather for.',
    string: true // takes true or false
  }
})
.help()
.alias('help', 'h')
.argv;

// encode the argument
encodedAddress = encodeURIComponent(argv.address); // could also do argv.a

//  error, response, body are exactly what's called in the documentation. Just using the same terms here.
request({
  // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2)); // just print the body from the 3x arguments
    // since there is only 1 result, this looks at the first and at formatted address - per looking at it with JSON View
    // else if statements are added into the callback to handle how the data is received.
    if (error) {
      console.log('ERROR: Unable to connect to Google Servers');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find address');
    } else if (body.status === 'OK') {
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    };
});
