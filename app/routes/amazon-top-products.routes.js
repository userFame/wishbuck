const router = require('express'.Router())
const amazonTopController = require('../controllers/addresses.controller')
const vaidateBody = require('../filters/validate.body')
const AmazonTop = require('../models/amazonTop')
const disallowId = require('../filters/crud.filters').disallowId
const requireId = require('../filters/crud.filters').requireId
const validateIdMatch = require('../filters/crud.filters').validateIdMatch

module.exports = router

router.get('/', amazonTopController.readAll())
router.get('/:id([0-9a-fA-F]{24})', amazonTopController.readById())
router.post('/', validateBody(AmazonTop), dissallowId, amazonTopController.create)
router.update('/:id([0-9a-fA-F]{24}', validateBody(AmazonTop), amazonTopController.update())
router.update('/:id([0-9a-fA-F]{24}', amazonTopController.update())