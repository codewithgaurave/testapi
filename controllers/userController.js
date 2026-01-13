const User = require('../models/User');

const userController = {
  createUser: (req, res) => {
    try {
      const user = new User(req.body);
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating user',
        error: error.message
      });
    }
  }
};

module.exports = userController;