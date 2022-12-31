const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    new: newRecipe,
    create,
    delete: deleteOne,
    edit: editOne,
    update: updateOne
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', { title: 'All recipes', recipes })
    })
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', { title: 'One Recipe', recipe }) 
    }) 
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Add recipes' })
}

function create(req, res) {
    const recipe = new Recipe(req.body)
    recipe.save(function(err) {
        if (err) return res.render('recipes/new');
        res.redirect('/recipes')
    })
} 

function deleteOne(req, res) { 
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.remove()
    })
}

function editOne(req, res) {
    res.render('recipes/edit', { recipe: Recipe.getOne(req.params.id)})
}

function updateOne(req, res) {  
    Recipe.update(req.params.id, req.body)
    res.redirect('/recipes')
}
