const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['visitor', 'executive', 'organizer'],
        required: true
    },
    stallNumber: {
        type: String,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);