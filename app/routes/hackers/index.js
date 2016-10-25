const hackers = require('express').Router()

// hacker routes ===========================================================
const all = require('./all')
hackers.get('/', all)

const post = require('./post')
hackers.post('/', post)

const remove = require('./delete')
hackers.delete('/:id', remove)

module.exports = hackers
