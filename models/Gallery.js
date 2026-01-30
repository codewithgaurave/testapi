const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  event: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  photographer: { type: String, required: true },
  images: [{ type: String, required: true }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Gallery', gallerySchema);