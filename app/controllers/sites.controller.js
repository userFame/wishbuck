const path = require('path')

module.exports = {
    default: (req, res, next) => {
        res.sendFile('public/views/index.html', {
            root: path.join(__dirname, '../..')
        })
    }
}