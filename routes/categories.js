const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

router.get('/categories', categoriesCtrl.categoriesIndex);

router.get('/categories/:id', categoriesCtrl.show); 

router.delete('/categories/:id', categoriesCtrl.delete);

router.get('/categories/:id/edit', categoriesCtrl.edit);

router.put('/categories/:id', categoriesCtrl.update);

module.exports = router