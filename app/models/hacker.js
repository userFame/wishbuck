const mongoose = require('mongoose')

const hackerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

// define our hacker model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Hacker', hackerSchema)
