const router = require('express').Router()
const hackerRoutes = require('./hackers.routes')
const userRoutes = require('./users.routes')
const siteRoutes = require('./site.routes')

// register routes ///////////////////////////
router.use('/api/hackers', hackerRoutes)
router.use('/api/users', userRoutes)

// Handle API 404
router.use('/api/*', function (req, res, next) {
    res.sendStatus(404)
})

router.use(siteRoutes)


// Handle 500
router.use(function (err, req, res, next) {
    // If the error object doesn't exists
    if (!err) {
        return next()
    }

    // Log it
    console.error(err.stack)

    // Redirect to error page
    res.sendStatus(500)
})

module.exports = router
