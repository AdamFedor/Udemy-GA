const yargs = require('yargs');
const _ = require('lodash');
const weather = require('./weather.js');
const processData = require('./processing');

//COMMAND INPUTS
const dateGiven = {
    describe: 'Date of cached available options: MM/DD/YYYY, no zeros',
    demand: true,
    alias: 'd'
};

//YARGS
const argv = yargs
.command('today', 'Todays weather',{
})
.command('week', 'Todays weather',{
})
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
if (command === 'today'){
    //TODAYS WEATHER
    console.log('========================');
    processData.newData();
    var readOne = processData.findOne(processData.dateStamp());
    processData.displayToday(readOne);
    console.log('========================');
} else if (command === 'forecast') {
    //WEEKS WEATHER
    console.log('========================');
    processData.newData();
    var readOne = processData.findOne(processData.dateStamp());
    processData.displayAll(readOne);
    console.log('========================');
} else if (command === 'list') {
    //LIST DATES OF CACHE
    var listAll = processData.findAllDates(argv.date, argv.timing);
    console.log('========================');
    console.log(listAll);
    console.log('========================');
} else if (command === 'read') {
    //READ FROM FILE
    console.log('========================');
    var readOne = processData.findOne(argv.date);
    console.log(readOne);
    console.log('========================');
} else {
    console.log('Not a valid command');
};