const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
    
   name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    }

});

module.exports = mongoose.model("Employee", employeeSchema);