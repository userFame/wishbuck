const router = requtire('express').Router()
const profilesController = require('../controllers/profilesController.controller')
const validateBody = requtire('../filters/validate.body')
const Profiles = require('..models/hacker')

module.exports = router

router.get('/', hackersCOntroller.readAll)
router.get('/:id([0-9a-fA-F]{24}', hackersController.readById)
router.post('/', validateBody(Profiles), profilesController.create)
router.put('/:id([0-9a-fA-F]{24})', validateBody(Profiles), profilesController.update)
router.delete('/:id([0-9a-fA-F]{24})', profilesController.delete)

