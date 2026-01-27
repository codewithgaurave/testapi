class Property {
  constructor(data) {
    this.id = Date.now();
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.location = data.location;
    this.type = data.type;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.area = data.area;
    this.agent = data.agent;
    this.images = data.images || [];
    this.createdAt = new Date();
  }
}

module.exports = Property;