const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/67482830f9c335b40fa455081a2243d3/${lat},${lng}`, // key has since been changed
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('ERROR: Unable to connect to Dark Sky servers');
      // console.log('ERROR: Unable to connect to Dark Sky servers');
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
      // console.log(body.currently.temperature);
    } else {
      // console.log(`Server Error ${response.statusCode}: Unable to fetch weather`);
callback(`Server Error ${response.statusCode}: Unable to fetch data`)
    };
  });
};

module.exports.getWeather = getWeather;

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/67482830f9c335b40fa455081a2243d3/47.8627489,-121.8867603
