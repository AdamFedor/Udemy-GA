const fs = require('fs');
const _ = require('lodash');

//NEW DATE STAMP
const dateStamp = () => { // currently not adjusted to timezone
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var thisDate = month + "/" + day + "/" + year;
    return thisDate;
};
dateStamp();

//PULL WEATHER DATA
var pullData = () => {
    try {
        var weatherString = fs.readFileSync('weather-data.json');
        return JSON.parse(weatherString);
    } catch (e) {
        return [];
    }
};

//PUSH WEATHER DATA
var pushData = (theData) => {
    fs.writeFileSync('weather-data.json', JSON.stringify(theData));
};

// CHECK NEW PUSH FOR DUPLICATES
var checkDuplicates = (theDate, sourceData, zipCode) => {
    if (_.isEmpty(sourceData) === true) {
        sourceData = [{}];
    };
    function checkForDuplicates(sourceData) {
        return sourceData.date === theDate;
    };
    duplicateReturn = sourceData.find(checkForDuplicates);
    if (duplicateReturn == undefined) {
        duplicateReturn = [{"date": "null"}];
    }
    return(duplicateReturn);
};

//FIND ALL WEATHER DATA DATES
var findAllDates = () => {
    var weatherSource = pullData();
    var datesFound = [];
    for (var zzz = 0; zzz < weatherSource.length; zzz++) {
        datesFound.push(weatherSource[zzz].date);
    }
    return(datesFound);
};

//FIND ONE WEATHER DATA
var findOne = (oneDate) => {
    var weatherSource = pullData();
    var bMatch = checkDuplicates(oneDate, weatherSource);
    if (bMatch.date === oneDate){
        return bMatch;
    } else {
        console.log('No date found');
    };
};

//REMOVE ALL WEATHER DATA
var removeAll = () => {
    fs.writeFileSync('weather-data.json','');
};

//DISPLAY TODAY
var displayToday = (sourceData) => {
    console.log('Display Today Only');
    var todayArray = [];
    todayArray.push(sourceData.summary[0]);
    todayArray.push(sourceData.temperatureHigh[0]);
    todayArray.push(sourceData.temperatureLow[0]);
    todayArray.push(sourceData.humidity[0]);
    todayArray.push(sourceData.windSpeed[0]);
    todayArray.push(sourceData.windGust[0]);
    todayArray.push(sourceData.temperatureNow);
    todayArray.push(sourceData.apparentTemperature);
    todayArray.push(sourceData.date);
    todayArray.push(sourceData.zip);
    console.log(todayArray);
};

//DISPLAY ALL
var displayAll = (sourceData) => {
    console.log('Display All');
    // loop today function and combine
};

//EXPORT
module.exports = {
    dateStamp,
    pullData,
    checkDuplicates,
    pushData,
    findAllDates,
    findOne,
    removeAll,
    displayToday,
    displayAll
}