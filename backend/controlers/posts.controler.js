const { dbService } = require('../services/init.service')
const { MODEL_NAMES } = require('../constants');
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    dbService.create(MODEL_NAMES.post, req.body)
        .then(posts => res.status(200).send("success"))
});

router.get('/', (req, res) => {
    dbService.get(MODEL_NAMES.post)
        .then(function(posts) {
            res.status(200).send(posts)
        })    
        });

router.delete('/:id', (req, res) => {
    dbService.delete(MODEL_NAMES.post, req.params.id)
        .then(posts =>  res.status(200).send(posts))
});

router.put('/:id', (req, res) => {
    dbService.update(MODEL_NAMES.post, {...req.body, id:req.params.id})
        .then(posts => res.status(200).send("updated"))
});

module.exports = router;
