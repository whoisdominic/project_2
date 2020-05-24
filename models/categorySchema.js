const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    userVotes: [{
        artistId: String,
        user_id: String,
    }]
}, {
    timestamps: true
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;