const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports = mongoose.model('Service', serviceSchema) 