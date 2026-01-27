class Recipe {
  constructor(data) {
    this.id = Date.now();
    this.name = data.name;
    this.description = data.description;
    this.ingredients = data.ingredients;
    this.instructions = data.instructions;
    this.cookTime = data.cookTime;
    this.servings = data.servings;
    this.difficulty = data.difficulty;
    this.cuisine = data.cuisine;
    this.chef = data.chef;
    this.images = data.images || [];
    this.createdAt = new Date();
  }
}

module.exports = Recipe;