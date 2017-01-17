// modules =================================================
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const expressValidator = require('express-validator')
const path = require('path')

// configuration ===========================================

// set our port
const port = process.env.PORT || 8080

// mpromise is depreciated, use native es6 Promise
mongoose.Promise = global.Promise

// connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL)

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

require('./config/passport')(passport) // pass passport for configuration

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())
app.use(expressValidator())
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

// admin
app.use('/admin/js', express.static(path.join(__dirname, 'client/admin/assets/js'), {
    fallthrough: false
}))
app.use('/admin/css', express.static(path.join(__dirname, 'client/admin/assets/css'), {
    fallthrough: false
}))
app.use('/admin/img', express.static(path.join(__dirname, 'client/admin/assets/img'), {
    fallthrough: false
}))
app.use('/admin/fonts', express.static(path.join(__dirname, 'client/admin/assets/fonts'), {
    fallthrough: false
}))

// shared
app.use('/libs', express.static(path.join(__dirname, 'client/libs'), {
    fallthrough: false
}))

// public assets
app.use('/assets', express.static(path.join(__dirname, 'client/public/assets'), {
    fallthrough: false
}))
app.use('/images', express.static(path.join(__dirname, 'client/public/images'), {
    fallthrough: false
}))
app.use('/build', express.static(path.join(__dirname, 'client/admin/build'), {
    fallthrough: false
}))

app.use('/static/api', express.static(path.join(__dirname, 'client/admin/api'), {
    fallthrough: false
}))
app.use('/app', express.static(path.join(__dirname, 'client/admin/modules'), {
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
