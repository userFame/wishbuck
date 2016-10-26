const router = require('express').Router()
const hacker = require('../models/hacker')
const hackerController = require('../controllers/hacker.controller')({ modelService: hacker })

// api routes ===========================================================
router.get('/', hackerController.getAll)
router.get('/:name', hackerController.getOne)
router.post('/', hackerController.insert)
router.put('/:id', hackerController.update)
router.delete('/:name', hackerController.remove)


module.exports = router