'use strict';

const mongoose = require('mongoose');

let pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  toppings: [{ type: String }],
  slices: { type: Number, min: 1, max: 16 },
  createdAt: { type: Date, default: Date.now }
});

// function randomInt() {
//   console.log('RANDOMINT!!!!');
//   return Math.floor(Math.random() * 16) + 1;
// }

let Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
