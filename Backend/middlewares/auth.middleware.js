const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const blacklisttokenModel = require('../models/blacklisttoken.model.js');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {   
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    const isblacklisted = await blacklisttokenModel.findOne({ token : token });

    if (isblacklisted) {    
        return res.status(401).json({ message: 'Token is blacklisted, authorization denied' });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Token is not valid' });
        }


        const user = await userModel.findById(decoded.id).select('-password');
        if (!user) {   
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        return next();

        // res.status(200).json({
        //     message: 'User authenticated successfully',
        //     user
        // });

    }catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Token is not valid' });
    }

}