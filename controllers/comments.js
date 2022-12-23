// function create(req, res) {
//     Recipe.findById(req.params.id)

//     req.body.user = req.user._id;
//     req.body.userAvatar = req.user.avatar
// }


// comment=review
// function deleteComment(req, res, next) {
//       // Note the cool "dot" syntax to query on the property of a subdoc
//   Movie.findOne({'comments._id': req.params.id}).then(function(movie) {
//     // Find the comment subdoc using the id method on Mongoose arrays
//     // https://mongoosejs.com/docs/subdocs.html
//     const comment = movie.comments.id(req.params.id);
//     // Ensure that the review was created by the logged in user
//     if (!review.user.equals(req.user._id)) return res.redirect(`/movies/${movie._id}`);
//     // Remove the review using the remove method of the subdoc
//     review.remove();
//     // Save the updated movie
//     movie.save().then(function() {
//       // Redirect back to the movie's show view
//       res.redirect(`/movies/${movie._id}`);
//     }).catch(function(err) {
//       // Let Express display an error
//       return next(err);
//       // res.redirect(`/movies/${movie._id}`);
//     });
//   });
// }
