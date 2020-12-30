const express = require('express')
const postTime = require('../models/postTime')
var ObjectID = require('mongoose').Types.ObjectId

var router = express.Router()

var { PostTime } = require('../models/postTime')

router.get('/', (req, res) => {
    PostTime.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log(`Error while retrieving all records: ${JSON.stringify(err, undefined, 2)}`)
    })
})

router.post('/', (req, res) => {
    var newRecord = new PostTime ({ 
        date: req.body.date,
        description: req.body.description
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log(`Error while creating record: ${JSON.stringify(err, undefined, 2)}`)
    })
})

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send(`No record with given id: ${req.params.id}`)

    var updatedRecord ={ 
        date: req.body.date,
        description: req.body.description
    }

    PostTime.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`Error while updating a record ${JSON.stringify(err, undefined, 2)}`)
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send(`No record with given id: ${req.params.id}`)

        PostTime.findByIdAndRemove(req.params.id, (err, docs) => {
            if (!err) res.send(docs)
            else console.log(`Error while deleting a record ${JSON.stringify(err, undefined, 2)}`)
        })
})

module.exports = router