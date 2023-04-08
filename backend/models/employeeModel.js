const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empCode: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],
    payments : [
        {
            type: Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ]

},{timestamps: true});

//static signup method
employeeSchema.statics.createemp = async function (empCode, firstName, lastName, phone, position, salary, email, password){

    //validation
    if(!empCode || !firstName || !lastName || !phone || !position || !salary || !email || !password) {
        throw Error('All fields are required');
    }
    if(!validator.isEmail(email)) {
        throw Error('Invalid email');
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    }
    if(!validator.isMobilePhone(phone)) {
        throw Error('Invalid phone number');
    }
    if(phone.length !== 10) {
        throw Error('Invalid phone number 10 digits required');
    }
    
    const exists = await this.findOne({ email });

    if(exists) {
        throw Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const employee = await this.create({ empCode, email,password: hash, firstName, lastName, phone, position, salary});

    return employee;

}

//static login method
employeeSchema.statics.login = async function (empCode, password) {

    //validation
    if(!empCode || !password) {
        throw Error('All fields are required');
    }

    const employee = await this.findOne({ empCode });

    if(!employee) {
        throw Error('Invalid Employee Code');
    }

    const match = await bcrypt.compare(password, employee.password);

    if(!match) {
        throw Error('Invalid password');
    }

    return employee;
}


module.exports = mongoose.model("Employee", employeeSchema);