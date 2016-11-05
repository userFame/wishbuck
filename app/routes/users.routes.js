const router = require('express').Router()
const userController = require('../controllers/user.controller')

module.exports = router

// api routes ===========================================================
router.post('/register', userController.register)
router.post('/login', userController.login)

