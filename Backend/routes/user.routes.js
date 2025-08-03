const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

const userController = require('../controllers/user.controller.js');


const authMiddleware = require('../middlewares/auth.middleware.js');

router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
);

router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'), 
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
);

router.get('/profile',authMiddleware.authUser, userController.getUserProfile);
    // This route can be used to get user profile information
router.get('/logout', authMiddleware.authUser, userController.logoutUser);


module.exports = router;