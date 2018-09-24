const fs = require('fs');
const _ = require('lodash');

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
var checkDuplicates = (theDate, sourceData, return1, return2) => {
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

//NEW WEATHER DATA
var newData = (theData) => {
    var weatherSource = pullData();
    var dupFilter = theData.date;
    var aMatch = checkDuplicates(dupFilter, weatherSource, true, false);
    if (aMatch.date === dupFilter){
        console.log('Duplicate entry');
    } else {
        weatherSource.push(theData);
        pushData(weatherSource);
    };
    return dupFilter;
};

// var xyz = {"summary":["Mostly Cloudy","Light rain overnight.","Light rain until afternoon, starting again in the evening.","Partly cloudy throughout the day.","Partly cloudy in the morning.","Mostly cloudy starting in the afternoon.","Mostly cloudy until evening."],"temperatureHigh":[70.37,64.45,63.68,65.94,70.39,72.5],"temperatureLow":[55.09,49.14,44.71,43.15,43.86,45.65],"humidity":[0.57,0.66,0.81,0.8,0.78,0.75,0.7],"windSpeed":[3.36,3.96,6.19,2.11,1.55,1.66,2.07],"windGust":[8.95,18.92,26.07,13.36,7.91,7.18,7.81],"date":"8/22/2018","temperature":68.07,"apparentTemperature":68.07};
// newData(xyz);

//DISPLAY ALL WEATHER DATA DATES
var displayAllDates = () => {
    var weatherSource = pullData();
    var datesFound = [];
    for (var zzz = 0; zzz < weatherSource.length; zzz++) {
        datesFound.push(weatherSource[zzz].date);
    }
    return(datesFound);
};

//DISPLAY ONE WEATHER DATA
var displayOne = () => {
    ////////////////////////////////////
};

//REMOVE ALL WEATHER DATA
var removeAll = () => {
    fs.writeFileSync('weather-data.json','');
}

//REMOVE ONE WEATHER DATA
var removeOne = () => {
    ////////////////////////////////////
};

//EXPORT
module.exports = {
    pullData,
    checkDuplicates,
    pushData,
    newData,
    displayAllDates,
    displayOne,
    removeAll,
    removeOne
}