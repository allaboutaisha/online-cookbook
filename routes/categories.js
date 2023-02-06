const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');
const isLoggedIn = require('../config/auth')

router.get('/categories', categoriesCtrl.categoriesIndex);

router.get('/categories/new', isLoggedIn, categoriesCtrl.new);

router.post('/categories', categoriesCtrl.create);

router.post('/recipes/:id/categories', categoriesCtrl.addToCategories)

router.get('/categories/:id', categoriesCtrl.show); 

router.delete('/categories/:id', isLoggedIn, categoriesCtrl.delete);

router.get('/categories/:id/edit', isLoggedIn, categoriesCtrl.edit);

router.put('/categories/:id', isLoggedIn, categoriesCtrl.update);

module.exports = router