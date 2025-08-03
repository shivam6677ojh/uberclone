const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const captainController = require('../controllers/captain.controller.js');

router.post('/register',[
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.vehicleplate').isLength({ min: 1 }).withMessage('Vehicle number is required'),
    body('vehicle.vehicletype').isLength({ min: 1 }).withMessage('Vehicle type is required'),
    body('vehicle.vehiclecapacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehiclecolor').isLength({ min: 1 }).withMessage('Vehicle color is required'),
], 
captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage('Valid email is reuired'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    
],
captainController.loginCaptain
);


module.exports = router;

