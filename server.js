//DEPENDENCIES

const express = require('express');

const mongoose = require('mongoose');

const morgan = require('morgan');

const methodOverride = require('method-override');

const session = require('express-session');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');

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

//Middleware

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

app.use(function(req, res, next){
    if(!req.session.user) {
        res.locals.user = null;
        return next();
}
    
        User.findById(req.session.user, (err, user) =>{
        req.user = user;
        delete req.user.password;
        res.locals.user = req.user;
        next();
    })
})




//Routes/Controllers

app.get('/', (req, res) =>{
    res.redirect('/users')
});

const shoesController = require('./controllers/shoes');

const usersController = require('./controllers/users');

const sessionsController = require('./controllers/sessions');

app.use('/sessions', sessionsController);

app.use('/shoes', shoesController);

app.use('/users', usersController);



//Listener
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
