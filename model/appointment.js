const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    casenumber : {
        type: Number,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    time : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
}, {timestamps : true});

const Doc = mongoose.model('Doc', appointmentSchema);

module.exports = Doc; 