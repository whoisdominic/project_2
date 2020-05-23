const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: Date,
        required: true,
        unique: false
    },
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
}, {
    timestamps: true
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;