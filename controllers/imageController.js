const Image = require('../models/Image');
const cloudinary = require('../config/cloudinary');

const imageController = {
  uploadImage: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No image file provided'
        });
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'testapi_images'
      });

      const imageData = {
        ...req.body,
        imageUrl: result.secure_url,
        publicId: result.public_id,
        size: result.bytes,
        format: result.format,
        width: result.width,
        height: result.height
      };

      const image = new Image(imageData);
      
      res.status(201).json({
        success: true,
        message: 'Image uploaded successfully',
        data: image
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error uploading image',
        error: error.message
      });
    }
  }
};

module.exports = imageController;