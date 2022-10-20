const router = require('express').Router();
let Game = require('../models/game.model');

router.route('/').get( (req, res) => {

     Game.find().then(game => res.json(game))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const { name, description, author, photoURL } = req.body;
    const newGame = new Game({name, description, author, photoURL});
    newGame.save().then(() => res.json('game added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Game.findOneAndDelete({_id: req.params.id}, err => {
        if(err) console.log(err);
         console.log("Successful deletion");
    });
});

router.route('/update/:id').put((req, res) => {
    const { name, description, author, photoURL } = req.body;
    Game.findById(req.params.id).then((game) => {
        game.name = name;
        game.description = description;
        game.author = author;
        game.photoURL = photoURL;

        game.save().then(() => res.json('game updated'))
        .catch(err => res.status(400).json('Error: ' + err));
        
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;