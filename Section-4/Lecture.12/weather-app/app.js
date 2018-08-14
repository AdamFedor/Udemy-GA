const yargs = require('yargs');

const geocode = require('./geocode/geocode'); // don't need to include the .js extension
const weather = require('./weather/weather');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'The address to fetch the weather for.',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, geoResults) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    // console.log(JSON.stringify(geoResults, undefined, 2));
    // lat, lng, callback - chaining and put inside the other
    weather.getWeather(geoResults.latitude, geoResults.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        // console.log(JSON.stringify(weatherResults, undefined, 2));
        console.log(`It's currently ${weatherResults.temperature} in ${geoResults.address}. It feels like ${weatherResults.apparentTemperature}`);
      };
    });
  };
});
