const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: String, required: true },
  agent: { type: String, required: true },
  images: [{ type: String, required: true }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Property', propertySchema);