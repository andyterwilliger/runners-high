const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    cushion: {type: Number, required: true},
    responsiveness: {type: Number, required: true},
    drop: {type: Number, required: true},
    price: {type: Number, required:true},
    summary: {type: String, required: true},
    overall: {type: Number, required: true}
})

const Shoe = mongoose.model('Shoe', shoeSchema);