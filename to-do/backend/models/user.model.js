const mongoose = require('mongoose');
const router = require('../routes/movies');

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    username: {
        type: String,
        required : [true, 'Add a name']
    },
    password: {
        type: String,
        required : [true, 'Add a password']
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;