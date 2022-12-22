const Client = require('../models/clientModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'});
}
//login client
const loginClient = async (req, res) => {
    const { email, password } = req.body;

    try {
        const client = await Client.login(email, password);

        //create token
        const token = createToken(client._id);

        res.status(200).json({email,token});
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}

//register client
const registerClient = async (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;

    try {
        const client = await Client.signup(firstName, lastName, phone, email, password);

        //create token
        const token = createToken(client._id);

        res.status(200).json({firstName,lastName,phone,email, token});
    }catch (error) {
        res.status(401).json({message: error.message});
    }
}

module.exports = {
    loginClient,
    registerClient
}
