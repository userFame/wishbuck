// grab the hacker model we just created
var Hacker = require('./models/hacker')

module.exports = function (app) {

  // server routes ===========================================================

  // handle things like api calls

  // authentication routes

  // sample api route
  app.get('/api/hackers', getAllHackers)

  // route to handle creating goes here (app.post)
  app.post('/api/hackers', createHacker)

  function getAllHackers (req, res) {
    // use mongoose to get all hackers in the database
    Hacker.find(function (err, hackers) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(hackers) // return all hackers in JSON format
    })
  }

  function createHacker (req, res) {
    Hacker.create({
      name: req.body.name
    }, createCallback)

    function createCallback (err, hacker) {
      if (err) {
        res.send(err)
      }

      Hacker.find(function (err, hackers) {
        if (err) {
          res.send(err)
        }
        res.json(hackers)
      })
    }
  }

  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================

  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  })
}
