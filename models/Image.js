class Image {
  constructor(data) {
    this.id = Date.now();
    this.title = data.title;
    this.description = data.description;
    this.imageUrl = data.imageUrl;
    this.publicId = data.publicId;
    this.category = data.category;
    this.tags = data.tags;
    this.uploadedBy = data.uploadedBy;
    this.size = data.size;
    this.format = data.format;
    this.width = data.width;
    this.height = data.height;
    this.createdAt = new Date();
  }
}

module.exports = Image;