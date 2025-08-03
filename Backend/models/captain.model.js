const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    },
    vehicle: {
        vehiclecolor:{
            type: String,
            required: true,
            minlength: [3, 'Vehicle color must be at least 3 characters long']
        },
        vehicleplate:{
            type: String,
            required: true,
            unique: true,
            minlength: [3, 'Vehicle plate must be at least 3 characters long']
        },
        vehiclecapacity: {
            type: Number,
            required: true,
            min: [1, 'Vehicle capacity must be at least 1']
        },
        vehicletype: {
            type: String,
            enum: ['car', 'bike', 'auto'],
            required: true
        }

    },
    location: {
        latitude:{
            type: Number,
        },
        longitude:{
            type: Number,
        }
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    }
}, {
    timestamps: true
});


captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {  
        expiresIn: '24h' // Token expires in 24 hours
    });
    return token;
};

captainSchema.methods.comparePassword = async function(Password) {
    return await bcrypt.compare(Password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10); 
}

module.exports = mongoose.model('captain', captainSchema);
