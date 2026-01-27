class Portfolio {
  constructor(data) {
    this.id = Date.now();
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.client = data.client;
    this.projectDate = data.projectDate;
    this.technologies = data.technologies;
    this.status = data.status;
    this.designer = data.designer;
    this.images = data.images || [];
    this.createdAt = new Date();
  }
}

module.exports = Portfolio;