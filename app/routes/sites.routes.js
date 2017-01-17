const router = require('express').Router()
const sitesController = require('../controllers/sites.controller')

// frontend routes =========================================================
// route to handle all angular requests
router.get('/admin', sitesController.admin)
router.get('/public', sitesController.public)

module.exports = router
