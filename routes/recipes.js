var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes'); 
const isLoggedIn = require('../config/auth');

router.get('/', recipesCtrl.index);

router.get('/new', isLoggedIn, recipesCtrl.new);

router.get('/:id', recipesCtrl.show);

router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);

router.post('/', isLoggedIn, recipesCtrl.create);

router.delete('/:id', recipesCtrl.delete);

router.put('/:id', recipesCtrl.update);

  
module.exports = router;

