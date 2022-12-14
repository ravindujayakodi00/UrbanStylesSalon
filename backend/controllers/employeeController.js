const { default: mongoose } = require("mongoose");

const Employee = require("../models/employeeModel");

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find().sort({ createdAt: -1 });

    res.status(200).json(employees);
};

const getEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No employee with that id");
    }

    const employee = await Employee.findById(id);

    if (!employee) {
        return res.status(404).send("No employee with that id");
    }

    res.status(200).json(employee);
};

const createEmployee = async (req, res) => {

    const { employee, client, date, time, service, duration, price, notes } = req.body;
    

    try {
        if (!employee || !client || !date || !time || !service || !duration || !price || !notes){
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const employee = await Employee.create({ employee, client, date, time, service, duration, price, notes });
        res.status(200).json(employee);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
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
    deleteEmployee,
    updateEmployee,
}
