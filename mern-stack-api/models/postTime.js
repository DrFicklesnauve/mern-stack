const mongoose = require('mongoose')

var PostTime = mongoose.model('PostTime', {
    date: {type: Date},
    description: {type: String}
})

module.exports = { PostTime }