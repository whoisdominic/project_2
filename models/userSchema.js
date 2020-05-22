const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountSchema = new Schema({
    firstName: { type: String, required: true, unique: false},
    lastName: { type: String, required: true, unique: false},
    userName: { type: String, required: true, unique: true},
    DOB: { type: String, required: true, unique: false},
    email: { type: Date, required: true, unique: false},
}, {timestamps: true});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
