const yargs = require('yargs');
const _ = require('lodash');
const weather = require('./weather.js');

//COMMAND INPUTS
//ADD DATE FOR HISTORY PULLS OF INFORMATION PREVIOUSLY COLLECTED
const dateOptions = {
    describe: 'Day Temperature: today, tomorrow, week',
    demand: true,
    alias: 'd'
};
const weatherType = {
    describe: 'Weather Status: all, temperature, details, message, alert',
    demand: true,
    alias: 'w'
};

//YARGS
const argv = yargs
.command('day', 'day of temperature to display',{
    date: dateOptions,
    type: weatherType
})
.help()
.argv;
//LODASH
var command = argv._[0];

//PROCESSING COMMAND
if (command === 'day'){
    //PROCESS CALL
    //READ FROM FILE
    console.log('--------------');
    console.log('Weather for a given day');
    console.log('Day: ', argv.date);
    console.log('Type: ', argv.type);
    console.log('--------------');
} else if (command === 'forecast') {
    //PROCESS CALL
    //READ FROM FILE
    console.log('--------------');
    console.log('Weather forecast');
    console.log('Type: ', argv.type);
    console.log('--------------');
} else if (command === 'list') {
    //READ ALL FROM FILE - DATES ONLY
} else if (command === 'history') {
    //READ FROM FILE
    console.log('--------------');
    console.log('Weather was');
    console.log('Type: ', argv.type);
    console.log('--------------');
} else {
    console.log('Not a valid command');
};

//STORE WEATHER TO DATE - CACHE
//PULL WEATHER FROM STORED FILE - MINIMIZES CALLS
//READ OUT WEATHER TO USER ON PAGE