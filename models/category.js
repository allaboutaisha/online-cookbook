const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    recipes: [{
        type: Schema.Types.ObjectId, ref: 'Recipe'
    }],
    category: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema)