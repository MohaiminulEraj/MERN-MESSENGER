import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req?.headers?.authorization?.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.log(error)
            return res.status(401).send('Invalid token');
            // throw new Error('Not authorized, token faild!');
        }
    }
    if (!token) {
        return res.status(403).send("Not authorized, token faild!");
        // throw new Error('Not authorized, no token')
    }
});

export { protect };