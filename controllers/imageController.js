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

      const result = await cloudinary.uploader.upload_stream(
        {
          folder: 'testapi_images',
          resource_type: 'image'
        },
        (error, result) => {
          if (error) {
            return res.status(400).json({
              success: false,
              message: 'Error uploading to Cloudinary',
              error: error.message
            });
          }

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
        }
      );

      result.end(req.file.buffer);
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