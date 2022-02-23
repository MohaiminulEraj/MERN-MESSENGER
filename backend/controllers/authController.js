import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/User.js';


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
        res.status(404)
        throw new Error('User not found!')
    }
    if (user && (await user.matchPassword(password))) {
        res.json({
            userDetails: {
                email: user.email.toLowerCase(),
                username: user.username,
                token: generateToken(user._id),
            }
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password, country, city, public_ip, timezone, isp } = req.body

    const userExists = await User.findOne({ email: email.toLowerCase() })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists!')
    }

    const user = await User.create({
        email: email.toLowerCase(),
        username,
        password,
        country,
        city,
        public_ip,
        timezone,
        isp,
    })
    if (user) {

        res.status(201).json({
            userDetails: {
                email: user.email,
                username: user.username,
                token: generateToken(user._id),
            }
        })

    } else {
        return res.status(500).send("Error occured. Please try again");
    }
})



export {
    loginUser,
    registerUser
}