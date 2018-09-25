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
var checkDuplicates = (theDate, sourceData) => {
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

// REMOVE THIS - NOT NEEDED //
//////////////////////////////
//NEW WEATHER DATA
var newData = (theData) => {
    var weatherSource = pullData();
    var dupFilter = theData.date;
    var aMatch = checkDuplicates(dupFilter, weatherSource);
    if (aMatch.date === dupFilter){
        console.log('Duplicate entry');
    } else {
        weatherSource.push(theData);
        pushData(weatherSource);
    };
    return dupFilter;
};
//////////////////////////////

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
var displayOne = (oneDate) => {
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

//EXPORT
module.exports = {
    pullData,
    checkDuplicates,
    pushData,
    newData,
    displayAllDates,
    displayOne,
    removeAll
}