const responses = require('../models/responses')

module.exports = hackerController

function hackerController(options) {

    let Hacker

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    Hacker = options.modelService

    return {
        getAll: getAll,
        getOne: getOne,
        insert: insert,
        update: update,
        remove: remove
    }

    function getAll(req, res) {
        Hacker.find(complete)

        function complete(err, hackers) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.status(500).send(new responses.ErrorResponse(err))

            const responseModel = new responses.ItemsResponse()
            responseModel.items = hackers
            res.json(responseModel)
        }
    }

    function getOne(req, res) {
        let query = { _id: req.params.id }
        Hacker.findOne(query, complete)

        function complete(err, hacker) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.status(500).send(new responses.ErrorResponse(err))

            const responseModel = new responses.ItemResponse()
            responseModel.item = hacker
            res.json(responseModel)
        }
    }

    function insert(req, res) {
        let hackerDoc = new Hacker(req.body)
        hackerDoc.save(complete)

        function complete(err, hacker) {
            if (err)
               return res.status(500).send(new responses.ErrorResponse(err))

            const responseModel = new responses.ItemResponse()
            responseModel.item = hacker
            return res.status(201).location(`/api/blogs/${hacker._id}`).json(responseModel)
        }
    }

    function update(req, res) {
        Hacker.update({ '_id': req.body._id }, req.body, complete)

        function complete(err, hacker) {
            if (err)
                res.status(500).send(new responses.ErrorResponse(err))

            const responseModel = new responses.ItemResponse()
            responseModel.item = hacker
            res.status(204).json(responseModel)
        }
    }

    function remove(req, res) {
        let query = { _id: req.params.id }
        Hacker.findOne(query, complete)

        function complete(err, hacker) {
            console.log(err)
            if (err)
                res.status(500).send(new responses.ErrorResponse(err))
            
            console.log(hacker)
            if(!hacker)
                res.status(404).send({message: 'Resource Not Found'})

            hacker.remove(removeComplete)

            function removeComplete(err, hacker) {
                if (err)
                    res.send(new responses.ErrorResponse(err))

                const responseModel = new responses.ItemResponse()
                responseModel.item = hacker
                res.json(responseModel)
            }
        }
    }
}

