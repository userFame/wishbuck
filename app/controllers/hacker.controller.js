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
                res.send(err)

            res.json(hackers)
        }
    }

    function getOne(req, res) {
        let query = { name: req.params.name }
        Hacker.findOne(query, complete)

        function complete(err, hacker) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(hacker)
        }
    }

    function insert(req, res) {
        let hackerDoc = new Hacker(req.body)
        hackerDoc.save(complete)

        function complete(err, hacker) {
            if (err)
                res.status('500').send(err)
            // return responseModel
            res.json(hacker)
        }
    }

    function update(req, res) {
        Hacker.update({'_id': req.body._id}, req.body, complete)

        function complete(err, hacker) {
            if (err)
                res.status('500').send(err)
            // return responseModel
            res.json(hacker)
        }
    }

    function remove(req, res) {
        let query = { name: req.params.name }
        Hacker.findOne(query, complete)

        function complete(err, hacker) {
            if (err)
                res.send(err)
            hacker.remove(removeComplete)

            function removeComplete(err, hacker) {
                if (err)
                    res.send(err)
                res.json(hacker)
            }
        }
    }
}

