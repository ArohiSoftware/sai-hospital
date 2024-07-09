// model/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: Number,
            required: true,
            maxLength: 10,
        },
        age: {
            type: Number,
            required: true,
        },
        bloodgroup: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'superadmin'],
            default: 'user',
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
