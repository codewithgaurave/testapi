const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  cookTime: { type: String, required: true },
  servings: { type: Number, required: true },
  difficulty: { type: String, required: true },
  cuisine: { type: String, required: true },
  chef: { type: String, required: true },
  images: [{ type: String, required: true }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);