const express = require('express');

const bcrypt = require('bcrypt');

const userRouter = express.Router();

const User = require('../models/user.js');

//Home page

userRouter.get('/', (req, res) => {
    res.render('home.ejs')
});

//Login routes




//Registration routes

userRouter.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

userRouter.post('/signup', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
     //   res.redirect('/login');
    res.redirect('/');
    })})
//});

//Export

module.exports = userRouter;