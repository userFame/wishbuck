<<<<<<< HEAD
const router = require('express').Router()
const hackerRoutes = require('./hackers.routes')
const siteRoutes = require('./site.routes')

// register routes ///////////////////////////
router.use('/api/hackers', hackerRoutes)
router.use('*', siteRoutes)

module.exports = router
=======
const routes = require('express').Router()

// server routes ===========================================================

// handle things like api calls
const hackers = require('./hackers')
routes.use('/api/hackers', hackers)

// authentication routes

// sample api route

// route to handle delete goes here (app.delete)

// frontend routes =========================================================

// route to handle all angular requests
routes.get('*', function (req, res) {
  res.sendfile('./public/views/index.html'); // load our public/index.html file
})

module.exports = routes
>>>>>>> origin/master
