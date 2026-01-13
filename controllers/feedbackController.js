const Feedback = require('../models/Feedback');

const feedbackController = {
  createFeedback: (req, res) => {
    try {
      const feedback = new Feedback(req.body);
      res.status(201).json({
        success: true,
        message: 'Feedback submitted successfully',
        data: feedback
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error submitting feedback',
        error: error.message
      });
    }
  }
};

module.exports = feedbackController;