// modules =================================================
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const path = require('path')

// configuration ===========================================

// set our port
const port = process.env.PORT || 8080

// mpromise is depreciated, use native es6 Promise
mongoose.Promise = global.Promise

// connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL)

require('./config/passport')(passport) // pass passport for configuration

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

// passport config
app.use(session({
    secret: process.env.PASSPORT_SESSION_SECRET || 'abc1234', // session secret
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
// persistent login sessions
app.use(passport.session())

// set the static files location /public/img will be /img for users
app.use('/js', express.static(path.join(__dirname, 'public/js'), {
    fallthrough: false
}))
app.use('/css', express.static(path.join(__dirname, 'public/css'), {
    fallthrough: false
}))
app.use('/libs', express.static(path.join(__dirname, 'public/libs'), {
    fallthrough: false
}))
app.use('/views', express.static(path.join(__dirname, 'public/views'), {
    fallthrough: false
}))

// Handle Static File 404
app.use(function(err, req, res, next) {
    if (err) console.error
    res.sendStatus(404)
})

// routes ==================================================
app.use(require('./app/routes'))

// start app ===============================================
app.listen(port, () => {
    console.log(`Magic happens on port: ${port}`)
})
