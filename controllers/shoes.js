const express = require('express');

const shoeRouter = express.Router();

const app = express();

//Routes

//Create

shoeRouter.post('/shoes', (req, res) =>{
    res.send(req.body);
});







module.exports = shoeRouter;