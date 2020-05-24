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
        unique: false
    },
    email: {
        type: String,
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
    votes: [{
        category: String,
        voted: Boolean,
        artistId: String
    }]
}, {
    timestamps: true
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;