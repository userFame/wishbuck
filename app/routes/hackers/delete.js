const Hacker = require('../../models/hacker')

module.exports = (req, res) => {
  Hacker.remove({
    _id: req.params.id
  }, deleteCallback)

  function deleteCallback (err, hacker) {
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
