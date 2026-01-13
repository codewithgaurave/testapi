const Blog = require('../models/Blog');

const blogController = {
  createBlog: (req, res) => {
    try {
      const blog = new Blog(req.body);
      res.status(201).json({
        success: true,
        message: 'Blog post created successfully',
        data: blog
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating blog post',
        error: error.message
      });
    }
  }
};

module.exports = blogController;