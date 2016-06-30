'use strict';

const mongoose = require('mongoose');

let pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 40 },
  toppings: [{ type: String }],
  slices: { type: Number, min: 1, max: 16, default: 8 },
  createdAt: { type: Date, default: Date.now },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' }
});

let Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
