'use strict';

const express = require('express');

let router = express.Router();

router.use('/pizzas', require('./pizzas'));

module.exports = router;
