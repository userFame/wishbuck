const Hacker = require('../../models/hacker')

module.exports = (req, res) => {
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
