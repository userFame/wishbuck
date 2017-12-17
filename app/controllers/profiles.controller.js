const responses = require('../models/responses')
const profilesService = require('../services/profiles.service')
const apiPrefix = '/api/hackers'

module.exports = {
    readAll: _readAll,
    readById: readById,
    create: _create,
    update: _update,
    delete: _delete
}

function _readAll(req, res) {
    profilesService.readAll()
        .then( profiles => {
            const responseModel = new responses.ItemsResponse()
            responseModel.items = profiles
            res.json(responseModel)
        })
}

function _readById(req,res) {
    profilesService.readById(req.params.id)
        .then(profile => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = profile
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _create(req, res) {
    profilesService.create(req.model)
        .then(profiles => {
            const responseModel = new responses.ItemsResponse()
            responseModel.item = profiles
            res.json(responseModel)
        })
}

function _update(req,res) {
    profilesService.update(req.model)
        .then(profile => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = profile
            res.json(responseModel)
        })
}

function _delete(req,res) {
    profilesService.delete(id)
        .then(() => {
            const responseModel = new responses.SuccessResponses()
            res.status(200).json(responseModel)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).send(new responses.ErrorResponse(err))
        })
}