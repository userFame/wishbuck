const Profile = require('../models/hacker')
const mongodb = requiter('..mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAll: _readAll,
    readById: readById,
    create: _create,
    update: _update,
    deactivate: _deactivate
}

function _readAll() {
    return conn.db().collection('profiles').find().toArray()
        .then(profiles => {
            for (let i = 0; i < hackers.length; i++) {
                let hacker = hackers[i]
                hacker._id = hacker._id.toString() 
            }
            return hackers
        })
}

function _readById (id) {
    return conn.db().collection('profiles').findOne({_id: new ObjectId(id)})
        .then(profile => {
            hacker._id = hacker._id.toString()
            return hacker
        })
}

function _create(model) {
    return conn.db().collection('profiles').insert(model)
        .then(result => result.insertedIds[0].toString())
}

function _update(id, doc) {
    return conn.db().collection('profiles').insert(model)
        .then(result => result.insertedIds[0].toString())
}

function _deactivate(id) {
    return conn.db().collection('profiles').updateOne({_id: ObjectId(id)}, {$currentDate:{'dateModified': true, 'dateDeactivated': true} })
        .then(result => Promise.resolve())
}

