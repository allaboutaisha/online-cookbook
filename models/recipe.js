const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: ObjectId,
    userId: ObjectId,
    userAvatar: String,
    text: String
},
{
    timestamps: true
});

const recipeSchema = new Schema