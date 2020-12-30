const mongoose = require('mongoose')
const URI = 'mongodb+srv://joshAdmin:Herender101@chat-app.fpkr9.mongodb.net/Chat-App?retryWrites=true&w=majority'

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {
        console.log('Mongodb connection successful')
    }
    else {
        console.log(`Error while connecting mongodb: ${JSON.stringify(err, undefined, 2)}`)
    }
})