import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        public_id: {
            type: String,
            // required: true,
        },
        url: {
            type: String,
            // required: true,
        }
    },
    username: {
        type: String,
        // required: true,
        // default: "u",
        // unique: true
    },
    country: {
        type: String,
    },
    city: {
        type: String
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {
    timestamps: true
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
// module.exports = User = mongoose.model('User', UserSchema)

// Return JWT token
UserSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_COOKIE_EXPIRES_IN
    });
}

// Generate password reset token
UserSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken

}

const User = mongoose.model('User', UserSchema)

export default User