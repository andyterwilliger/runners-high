const express = require('express');

const shoeRouter = express.Router();

const Shoe = require('../models/shoe.js');


//Routes

//Index

shoeRouter.get('/', (req, res) => {
    Shoe.find({}, (error, allShoes) => {
        res.render('index.ejs', {
            shoes: allShoes,
        });
    });
})


//New

shoeRouter.get('/new', (req, res) => {
    res.render('new.ejs')
});

//Delete

shoeRouter.delete('/:id', (req, res) => {
    res.send('deleting...')
})

//Create

shoeRouter.post('/', (req, res) => {
    Shoe.create(req.body, (error, createdShoe) => {
        res.redirect('/shoes')
    });
});

//Edit

//Show

shoeRouter.get('/:id', (req, res) => {
    Shoe.findById(req.params.id, (err, foundShoe) =>{
        res.render('show.ejs', {
            shoe: foundShoe,
        });
    });
});





module.exports = shoeRouter;