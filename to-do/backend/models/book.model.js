const mongoose = require('mongoose');
const router = require('../routes/books');

const Schema = mongoose.Schema;

const bookSchema = new Schema( {
    name: {
        type: String,
    },
    description: {
        type: String
    },
    author: {
        type: String,
    },
    photoURL: {
        type: String,
    }
})

const Book = mongoose.model('book', bookSchema);

module.exports = Book;