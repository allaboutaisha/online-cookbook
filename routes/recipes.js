var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes'); 
const isLoggedIn = require('../config/auth');

router.get('/', recipesCtrl.index);

router.get('/new', recipesCtrl.new);

router.get('/:id', recipesCtrl.show);

router.post('/', recipesCtrl.create);

router.delete('/:id', recipesCtrl.delete);

router.get('/:id/edit', recipesCtrl.edit);
 
module.exports = router;

