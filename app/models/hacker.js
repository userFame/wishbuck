// grab the mongoose module
var mongoose = require('mongoose')

// define our hacker model and validation requirements
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Hacker', {
  name: {
    type: String,
    required: true
  }
})
