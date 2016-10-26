const router = require('express').Router()
const hackerRoutes = require('./hackers.routes')
const siteRoutes = require('./site.routes')

// register routes ///////////////////////////
router.use('/api/hackers', hackerRoutes)
router.use('*', siteRoutes)

module.exports = router
