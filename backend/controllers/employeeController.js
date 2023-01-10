const { default: mongoose } = require("mongoose");

const Employee = require("../models/employeeModel");
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.EMPSECRET, {expiresIn: '1d'});
}
//login employee
const loginEmployee = async (req, res) => {
    const { empCode, password } = req.body;

    try {
        const employee = await Employee.login(empCode, password);

        //create token
        const token = createToken(employee._id);

        res.status(200).json({empCode,token});
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}

//create employee
const createEmployee = async (req, res) => {
    const { empCode, firstName, lastName, phone, position, salary, email, password  } = req.body;

    try {
        const employee = await Employee.createemp(empCode, firstName, lastName, phone, position, salary, email, password);

        //create token
        const token = createToken(employee._id);

        res.status(200).json({empCode,firstName,lastName,phone,position,salary,email, token});
    }catch (error) {
        res.status(401).json({message: error.message});
    }
}


const getAllEmployees = async (req, res) => {
    const employees = await Employee.find().sort({ createdAt: -1 });

    res.status(200).json(employees);
};

const getEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No Employee with that id");
    }

    const employee = await Employee.findById(id);

    if (!employee) {
        return res.status(404).send("No Employee with that id");
    }

    res.status(200).json(employee);
};



//delete a employee
const deleteEmployee = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a employee'});
    }

    const employee = await Employee.findOneAndDelete({_id: id});

    if(!employee) {
        return res.status(404).json({error: 'No such a employee'});
    }

    res.status(200).json(employee);
}

//update a employee
const updateEmployee = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a employee'});
    }

    const employee = await Employee.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true})

    if(!employee) {
        return res.status(404).json({error: 'No such a employee'});
    }

    res.status(200).json(employee);
}



module.exports = {
    getAllEmployees,
    getEmployee,
    createEmployee,
    loginEmployee,
    deleteEmployee,
    updateEmployee,
}
