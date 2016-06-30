'use strict';

const mongoose = require('mongoose');

let pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 40 },
  toppings: [{ type: String }],
  slices: { type: Number, min: 1, max: 16, default: 8 },
  createdAt: { type: Date, default: Date.now },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' }
});

//  schema.statics  -->  Class (model) method
// Pizza.addChef(...)

let Pizza;

pizzaSchema.statics.addChef = function(pizzaId, chefId, cb) {
  // this is the model
  this.findById(pizzaId, function(err, pizza) {
    if(err || !pizza) return cb(err || {error: 'Pizza not found'});
    pizza.setChef(chefId, cb);
  });
};

pizzaSchema.methods.setChef = function(chefId, cb) {
  this.chef = chefId;
  this.save(cb);
};

Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
