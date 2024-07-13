const mongoose = require('mongoose');

const validRoles = ['admin', 'user'];
const userStatus = ['active', 'inactive'];

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a first name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name'],
    },
    email: {
        type: String,
        unique : true,
        required: [true, 'Please enter an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter an phone number'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    profilePic: {
        type: String,
    },
    role: {
        type: String,
        enum: validRoles,
        default: 'user',
    },
    status: {
        type: String,
        enum: userStatus,
        default: 'active',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
