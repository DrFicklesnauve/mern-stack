const mongoose = require('mongoose')
const URI = process.env.URI

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {
        console.log('Mongodb connection successful')
    }
    else {
        console.log(`Error while connecting mongodb: ${JSON.stringify(err, undefined, 2)}`)
    }
})