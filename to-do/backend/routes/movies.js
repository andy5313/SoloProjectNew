const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
    Movie.find().then(movie => res.json(movie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const { name, description, author, photoURL } = req.body;
    const newMovie = new Movie({name, description, author, photoURL});
    newMovie.save().then(() => res.json('movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Movie.findOneAndDelete({_id: req.params.id}, err => {
        if(err) console.log(err);
         console.log("Successful deletion");
    });
});

router.route('/').put((req, res) => {
    const { name, description, author, photoURL } = req.body;
    const newMovie = new Movie({name, description, author, photoURL});
    newMovie.findById(req.body.id).then((movie) => {
        movie.name = name;
        movie.description = description;
        movie.author = author;
        movie.save().then(() => res.json('movie updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;