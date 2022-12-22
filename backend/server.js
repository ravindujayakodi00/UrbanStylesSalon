const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//routes imports
const appointmentRoute = require('./routes/appointments');
const clientsRoute = require('./routes/clients');
const employeesRoute = require('./routes/employees');

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes

app.use('/api/appointments', appointmentRoute);
app.use('/api/clients', clientsRoute);
app.use('/api/employees', employeesRoute);


mongoose.set('strictQuery', true);

// connect to DB
mongoose
.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to the db & listening on port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("Error");
    });



