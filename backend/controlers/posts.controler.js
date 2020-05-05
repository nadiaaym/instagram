const { dbService } = require('../services/init.service')
const { MODEL_NAMES } = require('../constants');
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body)
    dbService.create(MODEL_NAMES.post, {id: "3"})
        .then(posts => res.status(200).send("success"))
});

router.get('/', (req, res) => {
    dbService.get(MODEL_NAMES.post)
        .then(posts =>  res.status(200).send(posts));    
});



module.exports = router;


