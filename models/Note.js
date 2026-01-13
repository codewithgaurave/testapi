class Note {
  constructor(data) {
    this.id = Date.now();
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.priority = data.priority;
    this.tags = data.tags;
    this.color = data.color;
    this.reminder = data.reminder;
    this.isArchived = data.isArchived;
    this.isPublic = data.isPublic;
    this.attachments = data.attachments;
    this.collaborators = data.collaborators;
    this.createdAt = new Date();
  }
}

module.exports = Note;