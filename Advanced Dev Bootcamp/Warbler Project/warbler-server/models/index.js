// responsible for connecting to Mongo Database and setting up mongoose
const mongoose = require('mongoose');
mongoose.set('debug', true); // useful to see the mongo queries in the terminal
mongoose.Promise = Promise; // using async
mongoose.connect('mongodb://localhost/warbler', { // what we'll connect to
    // to ensure the connection is stable
    keepAlive: true,
    useMongoClient: true // so we don't get warnings of Mongo
});