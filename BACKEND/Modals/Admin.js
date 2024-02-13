const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdminSchema = new Schema({
    admin_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('admin', AdminSchema);