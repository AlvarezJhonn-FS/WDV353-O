const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, 'Please provide a make'],
        unique: [true, 'Make already exists'],
        trim: true
    },
    model: {
        type: String,
        required: [true, 'Please provide a model'],
        unique: [true, 'Model already exists']
    },
    year: {
        type: Number,
        required: [true, 'Please provide a year'],
       
    },
    seller: {
        type: String,
        required: [true, 'Please provide a seller']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    },
    color: {
        type: String,
        required: [true, 'Please provide a color'],
        unique: [true, 'Color already exists']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Car', carSchema);
