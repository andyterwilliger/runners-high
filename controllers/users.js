const express = require('express');

const bcrypt = require('bcrypt');

const userRouter = express.Router();

const User = require('../models/user.js');

//Login routes




//Registration routes

userRouter.get('/', (req, res) => {
    res.render('signup.ejs')
})

userRouter.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    
    User.create(req.body, (err, createdUser) => {
        res.redirect('/login');
    });
});

//Export

module.exports = userRouter;