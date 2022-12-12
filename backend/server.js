const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//routes imports
const appointmentRoutes = require('./routes/appointments');

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes

app.use('/api/appointments', appointmentRoutes);

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



