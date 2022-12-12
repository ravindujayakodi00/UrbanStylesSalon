const express = require('express');

const { getAllAppointments, getAppointment, createAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');

const router = express.Router();

router.get('/', getAllAppointments);
router.get('/:id', getAppointment);
router.post('/', createAppointment);
router.delete('/:id', deleteAppointment);
router.patch('/:id', updateAppointment);


module.exports = router;