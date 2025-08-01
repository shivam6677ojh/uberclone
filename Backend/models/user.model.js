const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({

    fullname :{
        firstname:{
            type: String,
            minlength: [3, 'First name must be at least 3 characters long'],
            required: true
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
        minlength: [5, 'Email must be at least 5 characters long'],
        maxlength: [50, 'Email must be at most 50 characters long']
    }, 
    password:{
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    },
    soketId: {
        type: String,  
    } 

}, {timestamps: true}
);

UserSchema.methods.genrateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;