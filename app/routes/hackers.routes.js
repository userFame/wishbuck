const router = require('express').Router()
const hacker = require('../models/hacker')
const hackerController = require('../controllers/hacker.controller')({ modelService: hacker })

module.exports = router

// api routes ===========================================================
router.get('/', hackerController.getAll)
router.get('/:id', hackerController.getOne)
router.post('/', hackerController.insert)
router.put('/:id', hackerController.update)
router.delete('/:id', hackerController.remove)