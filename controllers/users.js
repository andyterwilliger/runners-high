const express = require('express');

const bcrypt = require('bcrypt');

const userRouter = express.Router();

const User = require('../models/user.js');

// New: Registration page


//Create: registration route

userRouter.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    res.send(req.body);
})

//Export

module.exports = userRouter;