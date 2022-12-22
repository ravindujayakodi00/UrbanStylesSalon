const { default: mongoose } = require("mongoose");

const Appointment = require("../models/appointmentModel");

const getAllAppointments = async (req, res) => {
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    res.status(200).json(appointments);
};

const getAppointment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No appointment with that id");
    }

    const appointment = await Appointment.findById(id);

    if (!appointment) {
        return res.status(404).send("No appointment with that id");
    }

    res.status(200).json(appointment);
};

const createAppointment = async (req, res) => {

    const { employee, client, date, time, service, duration, price, notes } = req.body;
    

    try {
        if (!employee || !client || !date || !time || !service || !duration || !price ){
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const appointment = await Appointment.create({ employee, client, date, time, service, duration, price, notes });
        res.status(200).json(appointment);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//delete a appointment
const deleteAppointment = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a appointment'});
    }

    const appointment = await Appointment.findOneAndDelete({_id: id});

    if(!appointment) {
        return res.status(404).json({error: 'No such a appointment'});
    }

    res.status(200).json(appointment);
}

//update a appointment
const updateAppointment = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a appointment'});
    }

    const appointment = await Appointment.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true})

    if(!appointment) {
        return res.status(404).json({error: 'No such a appointment'});
    }

    res.status(200).json(appointment);
}

module.exports = {
    getAllAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment,
}
