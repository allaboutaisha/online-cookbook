const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // _id: ObjectId,
    // userId: ObjectId,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userAvatar: String,
    text: String,
    rating: {type: Number, min: 1, max: 5, default: 5} 
},
{
    timestamps: true
});

const recipeSchema = new Schema({
    name: String,
    imgURL: String,
    directions: String,
    categories: [String],
    ingredients: [String],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema)