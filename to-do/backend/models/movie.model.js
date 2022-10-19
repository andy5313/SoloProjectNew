const mongoose = require('mongoose');
const router = require('../routes/movies');

const Schema = mongoose.Schema;

const movieSchema = new Schema( {
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

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;