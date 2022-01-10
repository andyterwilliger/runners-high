//DEPENDENCIES

const express = require('express');

const mongoose = require('mongoose');

const morgan = require('morgan');

const methodOverride = require('method-override');

const session = require('express-session');

const app = express();

require('dotenv').config();
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

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

//Routes/Controllers

app.get('/', (req, res) =>{
    res.redirect('/shoes')
});

const shoesController = require('./controllers/shoes');

const usersController = require('./controllers/users');

app.use('/shoes', shoesController);

app.use('/users', usersController);



//Listener
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
