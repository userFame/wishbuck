module.exports = {
    default: (req, res) => {
        res.sendfile('./public/views/index.html')
    }
}