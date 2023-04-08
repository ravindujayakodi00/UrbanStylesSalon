const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    employee : {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }

}, {timestamps: true});

module.exports = mongoose.model("Appointment", appointmentSchema);