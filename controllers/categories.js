const Recipe = require('../models/recipe')
const Category = require('../models/category')

module.exports = { 
    categoriesIndex,
    new: newCategory,
    create,
    addToCategories,
    show,
    delete: deleteCategory,
    edit: editCategory,
    update: updateCategory
}

function categoriesIndex (req, res) {
    const category = req.params.category.split(' ');
    Recipe.find({ categories: { $in: [category] } }, function(err, recipes) {
        req.body.user = req.user._id;
        res.render('recipes/categories', { title: 'Categories', recipes, category });
    });
}

function newCategory(req, res) {
  Category.find({}).then(function(categories) {
       res.render('categories/new', { 
           categories, 
           title: 'Add Category'
       });
  }); 

function create(req, res) { 
  Category.create(req.body, function (err, category) {
      res.redirect('/categories/new');
  });
}

function addToCategories(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
      recipe.category.push(req.body.categoryId)
      recipe.save(function(err) {
          res.redirect(`/recipes/${recipe._id}`)
      })
  })
}

// when user clicks on category, show all recipes
function show(req, res) {
    const category = req.params.category;
    Recipe.find({ categories: category }, function(err, recipes) {
      res.render('categories/show', { recipes, category });
    });
}
 

function deleteCategory(req, res, next) { 
  Recipe.findOne({'categories._id': req.params.id}).then(function(recipe) { 
    const category = recipe.categories.id(req.params.id); 
    if (!category.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`); 
    category.remove()
    recipe.save().then(function() { 
      res.redirect(`/recipes/${recipe._id}`);
    }).catch(function(err) { 
      return next(err); 
    });
  });
}

function editCategory(req, res) {
    Recipe.findOne(req.params.id, function(err, recipe) {
      const category = recipe.categories.id(req.params.id);
      res.render('categories/edit', {comment});
})
}

function updateCategory(req, res) { 
    Recipe.findOne({"categories._id" : req.params.id}, function(err, recipe) {
      recipe.categories.id(req.params.id).set(req.body);
      recipe.save(function() {
        if (err) return res.redirect(`/recipes/${recipe._id}`);
        res.redirect(`/recipes/${recipe._id}`);
      });
})
}