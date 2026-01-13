class Blog {
  constructor(data) {
    this.id = Date.now();
    this.title = data.title;
    this.content = data.content;
    this.author = data.author;
    this.category = data.category;
    this.tags = data.tags;
    this.summary = data.summary;
    this.readTime = data.readTime;
    this.status = data.status;
    this.featured = data.featured;
    this.metaTitle = data.metaTitle;
    this.metaDescription = data.metaDescription;
    this.createdAt = new Date();
  }
}

module.exports = Blog;