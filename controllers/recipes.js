const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', { title: 'All recipes', recipes })
    })
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Add recipes' })
}

function create(req, res) {
    recipe.save(function(err) {
        if (err) return res.render('recipes/new');
        res.redirect('/recipes')
    })
};  