'use strict';

const express = require('express');
const Chef = require('../models/chef');

let router = express.Router();

// chefs.js

router.route('/')
  .get((req, res) => {
    Chef.find({}, (err, chefs) => {
      res.status(err ? 400 : 200).send(err || chefs);
    });
  })
  .post((req, res) => {
    Chef.create(req.body, (err, chef) => {
      res.status(err ? 400 : 200).send(err || chef);
    });
  })

router.route('/:id')
  .get((req, res) => {
    Chef.findById(req.params.id, (err, chef) => {
      res.status(err ? 400 : 200).send(err || chef);      
    });
  })
  .put((req, res) => {
    Chef.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, chef) => {
      res.status(err ? 400 : 200).send(err || chef);      
    });
  })
  .delete((req, res) => {
    Chef.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);      
    });
  })

module.exports = router;
