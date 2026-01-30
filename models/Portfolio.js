const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  client: { type: String, required: true },
  projectDate: { type: String, required: true },
  technologies: { type: String, required: true },
  status: { type: String, required: true },
  designer: { type: String, required: true },
  images: [{ type: String, required: true }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);