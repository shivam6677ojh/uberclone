const UserModel = require('../models/user.model.js');

const userService = require('../services/user.service.js');

const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res,next) => { 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('Registering user:', req.body);

    const { fullname, email, password } = req.body;

    const hashedPassword = await UserModel.hashPassword(password);

    try{
        const user = await userService.createUser({
            firstname : fullname.firstname,
            lastname : fullname.lastname,
            email,
            password: hashedPassword
        });
        const token = user.genrateAuthToken();

        res
        .status(201)
        .json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                password: hashedPassword              // Don't send password back
            },
            token
        });
    }catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}