class Feedback {
  constructor(data) {
    this.id = Date.now();
    this.feedback = data.feedback;
    this.rating = data.rating;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.subject = data.subject;
    this.category = data.category;
    this.priority = data.priority;
    this.status = data.status;
    this.department = data.department;
    this.source = data.source;
    this.isAnonymous = data.isAnonymous;
    this.createdAt = new Date();
  }
}

module.exports = Feedback;