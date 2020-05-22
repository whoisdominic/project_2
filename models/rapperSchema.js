const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountSchema = new Schema({
    name: { type: String, required: true, unique: false},
    albums: { type: String, required: true,},
    mixtapes: { type: String, required: true},
    topSongs: { type: String, required: true},
    spotifyId: {type: String, required: true, unique: true},
    followers: {type: Number, required: true},
    popularity: {type: Number, required: true},
    images: [{type: Object, required: true}],
    userVotes: {type: Number, required: true}
}, {timestamps: true});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;

