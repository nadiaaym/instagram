const { dbService } = require('../services/init.service')
const { MODEL_NAMES } = require('../constants');
const express = require('express');

const router = express.Router();

router.get('/' , (req, res) => {
    dbService.get(MODEL_NAMES.like)
        .then(likes => res.status(200).send(likes))
});

module.exports = router;
