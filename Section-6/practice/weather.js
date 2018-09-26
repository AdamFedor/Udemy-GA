const axios = require('axios');
const processData = require('./processing');

//DOTENV
require('dotenv').config();
const keyGeo = process.env.WEATHERKEY;
const keyDark = process.env.DARKSKY;

//WEATHER CALL
var weatherCall = (addressRequested) => {
    var thisDate = processData.dateStamp();
    //CHECK IF DUP
    var sourceData = processData.pullData();
    var sourceDup = processData.checkDuplicates(thisDate, sourceData);
    if (sourceDup.date === thisDate){
        console.log('Entry already cached');
        return;
    } else {
        //PULL NEW DATA
        var encodedAddress = encodeURIComponent(addressRequested);
        var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keyGeo}`
        //GEOCODE
        axios.get(geocodeURL).then((response) => {
            if (response.data.status === 'ZERO RESULTS') {
                throw new Error('Unable to find address');
            };
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            //DARKSKY
            var weatherURL = `https://api.darksky.net/forecast/${keyDark}/${lat},${lng}`;
            return axios.get(weatherURL);
        }).then((response) => {
            var darkSkyObject = new Object();
            darkSkyObject.summary = [];
            darkSkyObject.temperatureHigh = [];
            darkSkyObject.temperatureLow = [];
            darkSkyObject.humidity = [];
            darkSkyObject.windSpeed = [];
            darkSkyObject.windGust = [];
            darkSkyObject.date = thisDate;
            darkSkyObject.summary.push(response.data.currently.summary);
            darkSkyObject.temperature = response.data.currently.temperature;
            darkSkyObject.apparentTemperature = response.data.currently.apparentTemperature;
            darkSkyObject.humidity.push(response.data.currently.humidity);
            darkSkyObject.windSpeed.push(response.data.currently.windSpeed);
            darkSkyObject.windGust.push(response.data.currently.windGust);
            //LOOPED WEEK
            for (i = 0; i < 6; i++){
                darkSkyObject.summary.push(response.data.daily.data[i].summary);
                darkSkyObject.temperatureHigh.push(response.data.daily.data[i].temperatureHigh);
                darkSkyObject.temperatureLow.push(response.data.daily.data[i].temperatureLow);
                darkSkyObject.humidity.push(response.data.daily.data[i].humidity);
                darkSkyObject.windSpeed.push(response.data.daily.data[i].windSpeed);
                darkSkyObject.windGust.push(response.data.daily.data[i].windGust);
            };
            //STORE RESPONSES
            sourceData.push(darkSkyObject);
            processData.pushData(sourceData);
            console.log('New entry cached');
        }).catch((e) => {
        //ERROR HANDLING
            if (e.code === 'ENOTFOUND') {
                console.log('Unable to connect to API servers')
            } else {
                console.log('ERROR: ', e.message);
            };
        });
    };
};

//EXPORT
module.exports = {
    weatherCall
};