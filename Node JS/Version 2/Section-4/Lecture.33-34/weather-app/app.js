// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs.options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'The address to fetch the weather for.',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   };
// });

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/67482830f9c335b40fa455081a2243d3/47.8627489,-121.8867603

const request = require('request');
request({
  url: 'https://api.darksky.net/forecast/67482830f9c335b40fa455081a2243d3/47.8627489,-121.8867603',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('ERROR: Unable to connect to Dark Sky servers');
  } else if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log(`Server Error ${response.statusCode}: Unable to fetch weather`);
  };
});
