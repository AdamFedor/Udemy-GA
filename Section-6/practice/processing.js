const fs = require('fs');

//PULL WEATHER DATA
var pullData = () => {
    try {
        var weatherString = fs.readFileSync('weather-data.json');
        return JSON.parse(weatherString);
    } catch (e) {
        return [];
    }
};

// CHECK NEW PUSH FOR DUPLICATES
// var checkDuplicates = (theDate, sourceData, return1, return2) => {
var checkDuplicates = (theDate, sourceData) => {
    var dupFilter = {date: theDate};
    console.log(dupFilter);
    // var CheckForDups = sourceData.filter(function(item) {
    //     for (var key in dupFilter) {
    //         if (item[key] === undefined || item[key] !== dupFilter[key]) {
    //             console.log('1');
    //             return return1;
    //         };
    //     };
    // console.log('2');
    // return return2;
    // });
    // return(CheckForDups);
    // console.log(CheckForDups);
    return('');
};

//NEW WEATHER DATA
var newData = (theData) => {
    var weatherSource = pullData();
    // var aMatch = checkDuplicates("8/21/2018", weatherSource, false, true);
    var aMatch = checkDuplicates("8/21/2018", weatherSource);
    console.log(aMatch);
    if (aMatch.length === 0){
        console.log('duplicate found');
    } else {
        console.log('no duplicate');
    };
    // fs.writeFileSync('weather-data.json', JSON.stringify(theData));
};

newData();

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
    newData,
    displayAllDates,
    displayOne,
    removeAll,
    removeOne
}