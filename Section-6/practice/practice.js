const yargs = require('yargs');
const _ = require('lodash');

//COMMAND INPUTS
const dateOptions = {
    describe: 'Day Temperature: today, tomorrow, yesterday',
    demand: true,
    alias: 'd'
};
const weatherType = {
    describe: 'Weather Status: all, highs, lows, warnings',
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
    console.log('--------------');
    console.log('Weather for a given day')
    console.log('Day: ', argv.date);
    console.log('Type: ', argv.type);
    console.log('--------------');
} else {
    console.log('Not a valid command');
};