const mongoose = require('mongoose');
const router = require('../routes/games');

const Schema = mongoose.Schema;

const gameSchema = new Schema( {
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

const Game = mongoose.model('game', gameSchema);

module.exports = Game;