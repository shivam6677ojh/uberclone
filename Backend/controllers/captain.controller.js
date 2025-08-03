const captainModel = require('../models/captain.model.js');

const captainservice = require('../services/captain.service.js');

const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const iscaptainExists = await captainModel.findOne({ email });
    if (iscaptainExists) {
        return res.status(400).json({ message: 'Captain with this email already exists' });
    }


    const hashedpassword = await captainModel.hashPassword(password);


    try {
        const captain = await captainservice.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedpassword,
            vehiclecolor: vehicle.vehiclecolor,
            vehicleplate: vehicle.vehicleplate,
            vehiclecapacity: vehicle.vehiclecapacity,
            vehicletype: vehicle.vehicletype
        });

        const token = captain.generateAuthToken();
        return res.status(201).json({ token, captain });
    } catch (error) {
        return next(error);
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        const captain = await captainModel.findOne({ email }).select('+password');

        if (!captain) {
            res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await captain.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = captain.generateAuthToken();
        res.cookie('token', token);
        return res.status(200).json({
            message: "captain logged in successfully",
            token,
            captain
        });


    } catch (error) {
        console.error('Error logging in captain:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}