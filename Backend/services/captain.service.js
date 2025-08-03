const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    vehiclecolor,
    vehicleplate,
    vehiclecapacity,
    vehicletype
}) => {
    if (!firstname || !email || !password || !vehiclecolor || !vehicleplate || !vehiclecapacity || !vehicletype) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            vehiclecolor,
            vehicleplate,
            vehiclecapacity,
            vehicletype
        }
    });

    return captain;
}