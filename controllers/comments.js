const Recipe = require('../models/recipe')

module.exports = {
    create,
    delete: deleteComment,
    edit: editComment,
    update: updateComment
}

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        recipe.comments.push(req.body)
        recipe.save(function(err) {
          res.redirect(`/recipes/${recipe._id}`)
        })
    })   
}
 
function deleteComment(req, res, next) { 
  Recipe.findOne({'comments._id': req.params.id}).then(function(recipe) { 
    const comment = recipe.comments.id(req.params.id); 
    console.log(comment)
    if (!comment.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`); 
    comment.remove()
    recipe.save().then(function() { 
      res.redirect(`/recipes/${recipe._id}`);
    }).catch(function(err) { 
      return next(err); 
    });
  });
}

function editComment(req, res) {
    Recipe.findOne(req.params.id, function(err, recipe) {
      const comment = recipe.comments.id(req.params.id);
      res.render('comments/edit', {comment});
})
}

function updateComment(req, res) { 
    Recipe.findOne({"comments._id" : req.params.id}, function(err, recipe) {
      recipe.comments.id(req.params.id).set(req.body);
      recipe.save(function() {
        if (err) return res.redirect(`/recipes/${recipe._id}`);
        res.redirect(`/recipes/${recipe._id}`);
      });
})
}