const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open',  () =>  {
    console.log("MongoDB established")
})

const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

const gamesRouter = require('./routes/games');
app.use('/games', gamesRouter);

const userRouter = require('./routes/users')
app.use('/users', userRouter);

app.use('/login', (req, res) => {
    res.send({
        token: "andy"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`);
});
