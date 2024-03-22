const mongoose = require('mongoose');

const { Schema } = mongoose;

const SupplySchema = new Schema({
    enrollment: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
      
    },
    files:{
        type:[String],
        required:false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('supply',SupplySchema);