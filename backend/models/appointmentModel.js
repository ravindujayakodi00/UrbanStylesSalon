const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    
    employee: {
        type: String,
        required: true,
    },
    client: {
        type: String,
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
    },
    notes: {
        type: String,
        required: false,
    }

});

module.exports = mongoose.model("Appointment", appointmentSchema);