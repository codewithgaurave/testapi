class Comment {
  constructor(data) {
    this.id = Date.now();
    this.comment = data.comment;
    this.author = data.author;
    this.email = data.email;
    this.postId = data.postId;
    this.parentId = data.parentId;
    this.rating = data.rating;
    this.status = data.status;
    this.ipAddress = data.ipAddress;
    this.userAgent = data.userAgent;
    this.isVerified = data.isVerified;
    this.likes = data.likes || 0;
    this.createdAt = new Date();
  }
}

module.exports = Comment;