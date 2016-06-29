'use strict';

const express = require('express');
const Pizza = require('../models/pizza');

let router = express.Router();

//  pizzas.js
//  /api/pizzas

router.route('/')
  .get((req, res) => {

    Pizza.find({})

    .select('-name')
    .populate('chef')
    .sort('createdAt')
    .limit(1)

    .exec((err, pizzas) => {
      res.status(err ? 400 : 200).send(err || pizzas);
    })

  })
  .post((req, res) => {
    Pizza.create(req.body, (err, pizza) => {
      res.status(err ? 400 : 200).send(err || pizza);
    });
  })

router.route('/:id')
  .get((req, res) => {
    Pizza.findById(req.params.id, (err, pizza) => {
      if(err) return res.status(400).send(err);
      if(!pizza) return res.status(404).send({error: 'Pizza not found'});

      res.status(err ? 400 : 200).send(err || pizza);    
    });
  })
  .put((req, res) => {
    Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, pizza) => {
      res.status(err ? 400 : 200).send(err || pizza);      
    });
  })
  .delete((req, res) => {
    Pizza.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);      
    });
  })


//   PUT  /api/pizzas/294872938479283/addChef/577420498a444ff041815e89

router.put('/:pizzaId/addChef/:chefId', (req, res) => {
  Pizza.findById(req.params.pizzaId, (err, pizza) => {
    if(err || !pizza) return res.status(400).send(err || {error: 'Pizza not found'});

    // '577420498a444ff041815e89'
    pizza.chef = req.params.chefId;
    pizza.save((err, savedPizza) => {
      res.status(err ? 400 : 200).send(err || savedPizza);
    });
  });
});

module.exports = router;

