const mongoose = require('mongoose');
const User = require('./user'); // a reference to every

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // reference to the user model, which is what it's names in the model via user.js
    }
});

messagesSchema.pre('remove', async function(next) { // cannot use an arrow function for the value of this
    try {
        // find a user
        let user = await User.findById(this.userId);
        // remove the id of the message from their messages list
        user.message.remove(this.id); // Mongoose: Syncronously, it's like splicing a value from a list
        // save the user
        await user.save();
        // return next
        return next();
    } catch (e) {
        return next(err);
    }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;