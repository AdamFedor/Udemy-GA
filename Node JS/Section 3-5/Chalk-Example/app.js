// const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('12.0.2')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List out the notes',
    handler: function () {
        notes.listNotes();
    }
});
yargs.command({
    command: 'read',
    describe: 'Read out a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
});

//add, remove, read, list

// console.log(chalk.green.bold('success'));

yargs.parse()