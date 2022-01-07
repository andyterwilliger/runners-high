//DEPENDENCIES

const express = require('express');

const mongoose = require('mongoose');

const methodOverride = require('method-override');

require('dotenv').config();

const app = express();

//Database Connection

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

//Database Error/Success

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + "MongoDB is not connected"));
db.on('connected', () => console.log('Mongo Connected!'));
db.on('disconnected', () => console.log('MongoDB disconnected...'))

//Middlware

app.use(express.urlencoded({extended: true}));

//Routes/Controllers

shoesController = require('./controllers/shoes');

app.use(shoesController);




//Listener
const PORT = process.env.PORT;

app.listen(PORT, () => console.log('Server is listening!'));
