const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const userModel = require('../models/User');


const RegisterUser_se = async (user) => {
    const { userName, passWord } = user;

    // Check for existing user
    const userFind = await User.findOne({ userName });
    if (userFind) {
        return {
            status: 400,
            success: false,
            message: 'Username already exists'
        }
    }
    // All good
    const hashedPassword = await argon2.hash(passWord);
    const newUser = new User({
        userName,
        passWord: hashedPassword,
        createAt: Date.now()
    });
    await newUser.save();

    const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);

    // userModel.getUser('Admintck2').then((user) => {
    //     console.log(user);
    // });

    return {
        status: 201,
        success: true,
        message: 'User created successfully',
        data: {
            content: {
                accessToken
            }
        }
    };
}



module.exports = {
    RegisterUser_se
}


















