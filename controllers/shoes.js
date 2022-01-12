const express = require('express');

const shoeRouter = express.Router();

const Shoe = require('../models/shoe.js');

const shoeSeed = require('../models/shoeSeed.js');



//Routes

//Seed

shoeRouter.get('/seed', (req, res) => {
    Shoe.deleteMany({}, (error, allShoes) => {})

    Shoe.create(shoeSeed, (error, data) => {
        res.redirect('/')
    })
})



//Index

shoeRouter.get('/', (req, res) => {
   /* if (req.session.currentUser) {
        res.render('/users', {
            currentUser: req.session.currentUser
        })
    } else {
        res.render('/shoes', {
            currentUser: req.session.currentUser
        })
    }
*/
    Shoe.find({}, (error, allShoes) => {
        res.render('index.ejs', {
            currentUser: req.session.currentUser,
            shoes: allShoes,
        })
    })
})

//New

shoeRouter.get('/new', (req, res) => {
    res.render('new.ejs')
});

//Delete

shoeRouter.delete('/:id', (req, res) => {
    Shoe.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/shoes')
    });
});

//Update

shoeRouter.put('/:id', (req, res) => {
    Shoe.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true,
        },
        (err, updatedShoe) => {
            res.redirect(`/shoes/${req.params.id}`)
        }
    )
});

//Create

shoeRouter.post('/', (req, res) => {
    Shoe.create(req.body, (error, createdShoe) => {
        res.redirect('/shoes')
    });
});


//Edit

shoeRouter.get('/:id/edit', (req, res) => {
    Shoe.findById(req.params.id, (err, foundShoe) => {
        res.render('edit.ejs', {
            shoe: foundShoe,
        });
    });
});

//Show

shoeRouter.get('/:id', (req, res) => {
    Shoe.findById(req.params.id, (err, foundShoe) => {
        res.render('show.ejs', {
            shoe: foundShoe,
        });
    });
});





module.exports = shoeRouter;