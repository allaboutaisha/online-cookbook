const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
    text: String,
    rating: {type: Number, min: 1, max: 5, default: 5} 
},
{
    timestamps: true
});

const recipeSchema = new Schema({
    imgURL: String,
    name: String,
    ingredients: [String],
    directions: String, 
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema)