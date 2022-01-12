const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    img: String,
    drop: Number,
    responsiveness: Number,
    cushion: Number,
    mileage: Number,
    price: Number,
    overall: Number
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;