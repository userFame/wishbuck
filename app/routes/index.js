const router = require('express').Router()
const hackerRoutes = require('./hackers.routes')
const userRoutes = require('./users.routes')
const siteRoutes = require('./site.routes')

// register routes ///////////////////////////
router.use('/api/hackers', hackerRoutes)
router.use('/api/users', userRoutes)
router.use('*', siteRoutes)

module.exports = router
