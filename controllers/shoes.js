const express = require('express');

const shoeRouter = express.Router();

const Shoe = require('../models/shoe.js');


//Routes

//Index

//New

shoeRouter.get('/shoes/new', (req, res) => {
        res.send('new')
    });

//Delete

//Create

shoeRouter.post('/', (req, res) =>{
    Shoe.create(req.body, (error, createdShoe) => {
        res.send(createdShoe)
    });
})






module.exports = shoeRouter;