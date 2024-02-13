const mongoose = require('mongoose');
const { Schema } = mongoose;

const InternshipSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    job_title: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    job_type: {
        type: String,
        required: true
    },
    job_location: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('internship', InternshipSchema);