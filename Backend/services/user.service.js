const { hash } = require('bcrypt');
const userModel = require('../models/user.model.js');
const UserModel = require('../models/user.model.js');

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    const hashedpassword = await UserModel.hashPassword(password);

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashedpassword
    })

    return user;
}