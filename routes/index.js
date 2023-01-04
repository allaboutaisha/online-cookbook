var express = require('express');
var router = express.Router();
var passport = require('passport');
const recipesCtrl = require('../controllers/recipes'); 

/* GET home page. */
router.get('/', recipesCtrl.index {
  res.render('index', { title: 'Anne\'s Cookbook' });

});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // check route here
    successRedirect: '/recipes',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/')
  });
});

module.exports = router;
