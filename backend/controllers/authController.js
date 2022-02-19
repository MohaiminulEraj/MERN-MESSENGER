import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/User.js';
import gravatar from 'gravatar';
import normalize from 'normalize-url';


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
            _id: user._id,
            email: user.email.toLowerCase(),
            token: generateToken(user._id),
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
    const { email, password, country, city } = req.body

    const userExists = await User.findOne({ email: email.toLowerCase() })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists!')
    }

    const avatar = {
        url: normalize(
            gravatar.url(email.toLowerCase(), {
                s: '200',
                r: 'pg',
                d: 'mm'
            }),
            { forceHttps: true }
        )
    }
    const user = await User.create({
        email: email.toLowerCase(),
        password,
        avatar,
        country,
        city
    })
    if (user) {

        res.status(201).json({
            _id: user._id,
            email: user.email,
            verified: user.verified,
            token: generateToken(user._id),
        })

    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})



export {
    loginUser,
    registerUser
}