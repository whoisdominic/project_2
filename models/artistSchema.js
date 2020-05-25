const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    albums: {
        type: String,
        required: false,
    },
    genres: [{
        type: String,
        required: true
    }],
    spotifyId: {
        type: String,
        required: true,
        unique: true
    },
    followers: {
        type: Number,
        required: true
    },
    popularity: {
        type: Number,
        required: true
    },
    images: [{
        type: Object,
        required: true
    }],
    userVotes: [{
        category: String,
        user_id: String
    }]
}, {
    timestamps: true
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;