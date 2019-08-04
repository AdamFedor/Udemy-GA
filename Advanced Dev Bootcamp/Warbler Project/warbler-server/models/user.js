// user model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({ // which is an object
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    },
    // reference to all of the messages in an array
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

// before we save the user to the database, we want to hash the password
userSchema.pre('save', async function(next) {
    try {
        if(!this.isModified ('password')){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch(err) {
        return next(err); // where the error is passed onto the error handler
    };
});

// instance method - that every document we create has
// hash the password in the database to compare against the password provided hashed
userSchema.methods.comparePassword = async function(candidatePassword, next){
    try {
        // to the individual document we are calling this on
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch; // if true proceed, otherwise don't
    } catch(err) {
        return next(err);
    };
};

const User = mongoose.model('user', userSchema);

module.exports = User;