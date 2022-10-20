const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.findOne(req.body).then(user => {
        if (user.password === req.body.password){
            res.json("user verified")
        } else {
            res.send("not in database")
        }
    }).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const { username, password } = req.body;
    const newUser = new User({username, password});
    newUser.save().then(() => res.json('user added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/all').get((req, res) => {
    User.find().then(user => 
            res.json(user)
    ).catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;