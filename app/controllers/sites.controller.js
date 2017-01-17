const path = require('path')

module.exports = {
    admin: (req, res, next) => {
        res.sendFile('client/admin/index.html', {
            root: path.join(__dirname, '../..')
        })
    },
    public: (req, res, next) => {
        res.sendFile('client/public/index-v-7.html', {
            root: path.join(__dirname, '../..')
        })
    }
}
