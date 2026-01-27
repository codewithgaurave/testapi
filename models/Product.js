class Product {
  constructor(data) {
    this.id = Date.now();
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.category = data.category;
    this.brand = data.brand;
    this.stock = data.stock;
    this.mainImage = data.mainImage;
    this.thumbnailImage = data.thumbnailImage;
    this.createdAt = new Date();
  }
}

module.exports = Product;