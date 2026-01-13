const Note = require('../models/Note');

const noteController = {
  createNote: (req, res) => {
    try {
      const note = new Note(req.body);
      res.status(201).json({
        success: true,
        message: 'Note created successfully',
        data: note
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating note',
        error: error.message
      });
    }
  }
};

module.exports = noteController;