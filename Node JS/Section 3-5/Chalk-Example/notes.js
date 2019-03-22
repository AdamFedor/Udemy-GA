const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
};

const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((data) => {data.title === title})
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse.bold('New note added'))
    } else {
        console.log(chalk.yellow.inverse.bold('Duplicate Note: Note title taken'))
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bold.inverse.green('Note deleted successfully'))   
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.bold.inverse('No note to delete'))
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.white.inverse('Your notes:'))
    notes.forEach((note) => {
        console.log('Title: ', note.title)
    })
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse.bold('Note not found'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}