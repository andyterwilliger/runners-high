const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    drop: Number,
    responsiveness: Number,
    price: Number,
    summary: String,
    overall: Number
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;