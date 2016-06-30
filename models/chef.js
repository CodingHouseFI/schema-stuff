'use strict';

const mongoose = require('mongoose');

let chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearsOfExperience: Number
});

let Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
