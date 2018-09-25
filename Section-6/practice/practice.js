const yargs = require('yargs');
const _ = require('lodash');
const weather = require('./weather.js');
const processData = require('./processing');

//COMMAND INPUTS
//ADD DATE FOR HISTORY PULLS OF INFORMATION PREVIOUSLY COLLECTED
// const dateOptions = {
//     describe: 'Day Temperature: today, tomorrow, week',
//     demand: true,
//     alias: 'd'
// };
const dateGiven = {
    describe: 'Date of cached available options: MM/DD/YYYY, no zeros',
    demand: true,
    alias: 'd'
};

//YARGS
const argv = yargs
.command('list', 'List all days stored in local cache',{
})
.command('read','Read out details from a single stored',{
    date: dateGiven
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
    //LIST DATES OF CACHE
    var listAll = processData.displayAllDates();
    console.log(listAll);
} else if (command === 'read') {
    //READ FROM FILE
    console.log('--------------');
    console.log(argv.date);
    console.log(typeof(argv.date));
    var readOne = processData.displayOne(argv.date);
    console.log(readOne);
    console.log('--------------');
} else {
    console.log('Not a valid command');
};

//STORE WEATHER TO DATE - CACHE
//PULL WEATHER FROM STORED FILE - MINIMIZES CALLS
//READ OUT WEATHER TO USER ON PAGE