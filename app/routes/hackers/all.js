const Hacker = require('../../models/hacker')

module.exports = (req, res) => {
  // use mongoose to get all hackers in the database
  Hacker.find(function (err, hackers) {

    // if there is an error retrieving, send the error. 
    // nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(hackers) // return all hackers in JSON format
  })
}
