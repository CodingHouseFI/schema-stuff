'use strict';

const express = require('express');
const Pizza = require('../models/pizza');

let router = express.Router();

//  pizzas.js
//  /api/pizzas

router.get('/', (req, res) => {
  Pizza.find({}, (err, pizzas) => {
    res.status(err ? 400 : 200).send(err || pizzas);
  });
});

router.post('/', (req, res) => {
  Pizza.create(req.body, (err, pizza) => {
    res.status(err ? 400 : 200).send(err || pizza);
  });
});

module.exports = router;
