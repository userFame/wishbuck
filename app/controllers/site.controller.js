const router = require('express').Router()

module.exports = {
    default: (req, res) => {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    }
}