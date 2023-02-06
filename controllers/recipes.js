const Recipe = require('../models/recipe');
const Category = require('../models/category');

module.exports = {
    index,
    homeIndex,
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

function homeIndex(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('index', { title: 'Anne\'s Cookbook', recipes })
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
    // const categoryObj = {
    //     category: req.body.categories,
    //     user: req.user._id
    // }
    // req.body.categories = [categoryObj];
    
    const recipe = new Recipe(req.body)
    recipe.save(function(err) {
        if (err) return res.render('recipes/new');
        res.redirect('/recipes')
    })
} 

function deleteOne(req, res, next) { 
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.remove().then(function() {
            res.redirect('/recipes')
        }).catch(function(err) {
            return next(err)
        })
    })
}

function editOne(req, res) {
    Recipe.findById(req.params.id, function(err, foundRecipe) {
        res.render('recipes/edit', { title: 'Edit Recipe', recipe: foundRecipe })
    })
}

function updateOne(req, res) {
    Recipe.findOneAndUpdate(
        req.params.id, 
        req.body, 
        {
            new: true
        },
        function(err, recipe) {
            if (err || !recipe) return res.redirect('/recipes');
            res.redirect(`/recipes/${recipe._id}`);
        }
    )
};





