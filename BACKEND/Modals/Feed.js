const mongoose = require('mongoose');

const { Schema } = mongoose;

const FeedsSchema = new Schema({
    enrollment: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('feeds', FeedsSchema);