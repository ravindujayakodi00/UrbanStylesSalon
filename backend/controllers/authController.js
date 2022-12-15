const Client = require('../models/clientModel');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newClient = new Client({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
        });

        await newClient.save();
        res.status(200).send("User created successfully");
    }catch(error){
        next(error);
    }
}

module.exports = register;