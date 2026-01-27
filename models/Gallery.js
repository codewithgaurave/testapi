class Gallery {
  constructor(data) {
    this.id = Date.now();
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.event = data.event;
    this.location = data.location;
    this.date = data.date;
    this.photographer = data.photographer;
    this.images = data.images || [];
    this.createdAt = new Date();
  }
}

module.exports = Gallery;