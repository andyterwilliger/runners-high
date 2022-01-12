const express = require('express');

const bcrypt = require('bcrypt');

const sessionsRouter = express.Router();

const User = require('../models/user.js');

const session = require('express-session');

const userRouter = require('./users.js');

//Home

sessionsRouter.get('/', (req, res) =>{
    res.render('home.ejs')
})
//new login page
sessionsRouter.get('/login', (req, res) => {
    res.render('login.ejs', {
    //currentUser : req.session.currentUser
});
});
//Create: Login route

sessionsRouter.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (error, foundUser) => {
        if (!foundUser) {
            res.send(`We've "run" into an issue... No user with that email has been registered. Try again.`)
        } else {
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);

            //if passwords match
            if (passwordMatches) {
                req.session.currentUser = foundUser;
                res.redirect('/shoes')
            } else {
                res.send(`We've "run" into an issue... That's not a recognized password! Try again.`);
            }
        }
    });
});

//Delete: logout

sessionsRouter.delete('/', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    });
});


module.exports = sessionsRouter;