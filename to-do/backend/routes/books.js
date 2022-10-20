const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get( (req, res) => {
 
     Book.find().then(book => res.json(book))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const { name, description, author, photoURL } = req.body;
    const newBook = new Book({name, description, author, photoURL});
    newBook.save().then(() => res.json('book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Book.findOneAndDelete({_id: req.params.id}, err => {
        if(err) console.log(err);
         console.log("Successful deletion");
    });
});

router.route('/update/:id').put((req, res) => {
    const { name, description, author, photoURL } = req.body;
    Book.findById(req.params.id).then((book) => {
        book.name = name;
        book.description = description;
        book.author = author;
        book.photoURL = photoURL;

        book.save().then(() => res.json('book updated'))
        .catch(err => res.status(400).json('Error: ' + err));
        
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;