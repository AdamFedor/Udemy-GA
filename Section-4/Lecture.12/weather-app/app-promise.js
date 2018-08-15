const yargs = require('yargs');
const axios = require('axios');

require('dotenv').config(); //same as const for require.
const keyGeo = process.env.WEATHERKEY;
const keyDark = process.env.DARKSKY;

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keyGeo}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find address');
  };
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/${keyDark}/${lat},${lng}`;
  console.log('Address: ', response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  var humidity = response.data.currently.humidity;
  var windspeed = response.data.currently.windSpeed;
  var weatherMessage = response.data.daily.summary;
  var weatherAlert = response.data.alerts[0].description;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
  console.log(`Humiditiy is ${humidity}. And windspeed is ${windspeed}`)
  console.log(weatherMessage);
  if (weatherAlert !== undefined) {
    console.log('-----------');
    console.log(weatherAlert);
  };
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers')
  } else {
    console.log(e.message);// prints the thow new Error('')
  };
});
