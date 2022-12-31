const express = require('express')
const router = express.Router() 
const commentsCtrl = require('../controllers/comments')
// const isLoggedIn = require('../config/auth')

router.post('/recipes/:id/comments', commentsCtrl.create)

router.delete('/comments/:id', commentsCtrl.delete)

router.get('/:id/edit', commentsCtrl.edit)

module.exports = router