const blacklisttokenModel = require('../models/blacklisttoken.model.js');

const UserModel = require('../models/user.model.js');

const userService = require('../services/user.service.js');

const { validationResult } = require('express-validator');


module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('Registering user:', req.body);

    const { fullname, email, password } = req.body;

    
    try {
        // const hashedPassword = await UserModel.hashPassword(password); // no need of hasing here, handled in service
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password
        });
        const token = user.generateAuthToken();

        res
            .status(201)
            .json({
                message: 'User registered successfully',
                user,
                token
            });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('Logging in user:', { email: req.body.email, password: req.body.password });

    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email }).select('+password');
        console.log('Found user:', user);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        console.log('Provided password:', password);
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = await user.generateAuthToken();

        res.cookie('token', token);

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            },
            token
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json({
        message: 'User profile retrieved successfully', 
        user: {
            id: req.user._id,
            fullname: req.user.fullname,
            email: req.user.email
        }  
    });
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied' });
        }

        // Add the token to the blacklist

        await blacklisttokenModel.create({ token });

        // Clear the cookie
        res.clearCookie('token');

        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}