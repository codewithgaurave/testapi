const Comment = require('../models/Comment');

const commentController = {
  createComment: (req, res) => {
    try {
      const comment = new Comment(req.body);
      res.status(201).json({
        success: true,
        message: 'Comment added successfully',
        data: comment
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error adding comment',
        error: error.message
      });
    }
  }
};

module.exports = commentController;