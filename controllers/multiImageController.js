const Product = require('../models/Product');
const Gallery = require('../models/Gallery');
const Property = require('../models/Property');
const Recipe = require('../models/Recipe');
const Portfolio = require('../models/Portfolio');
const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (buffer, mimetype) => {
  const b64 = Buffer.from(buffer).toString('base64');
  const dataURI = 'data:' + mimetype + ';base64,' + b64;
  return await cloudinary.uploader.upload(dataURI, {
    folder: 'testapi_images',
    resource_type: 'image'
  });
};

const multiImageController = {
  // Product - 2 images
  createProduct: async (req, res) => {
    try {
      if (!req.files || req.files.length !== 2) {
        return res.status(400).json({
          success: false,
          message: 'Please upload exactly 2 images (mainImage, thumbnailImage)'
        });
      }

      const mainImageResult = await uploadToCloudinary(req.files[0].buffer, req.files[0].mimetype);
      const thumbnailResult = await uploadToCloudinary(req.files[1].buffer, req.files[1].mimetype);

      const productData = {
        ...req.body,
        mainImage: mainImageResult.secure_url,
        thumbnailImage: thumbnailResult.secure_url
      };

      const product = new Product(productData);
      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: product
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating product',
        error: error.message
      });
    }
  },

  // Gallery - 8 images
  createGallery: async (req, res) => {
    try {
      if (!req.files || req.files.length !== 8) {
        return res.status(400).json({
          success: false,
          message: 'Please upload exactly 8 images'
        });
      }

      const imageUrls = [];
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.buffer, file.mimetype);
        imageUrls.push(result.secure_url);
      }

      const galleryData = {
        ...req.body,
        images: imageUrls
      };

      const gallery = new Gallery(galleryData);
      res.status(201).json({
        success: true,
        message: 'Gallery created successfully',
        data: gallery
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating gallery',
        error: error.message
      });
    }
  },

  // Property - 4 images
  createProperty: async (req, res) => {
    try {
      if (!req.files || req.files.length !== 4) {
        return res.status(400).json({
          success: false,
          message: 'Please upload exactly 4 images'
        });
      }

      const imageUrls = [];
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.buffer, file.mimetype);
        imageUrls.push(result.secure_url);
      }

      const propertyData = {
        ...req.body,
        images: imageUrls
      };

      const property = new Property(propertyData);
      res.status(201).json({
        success: true,
        message: 'Property created successfully',
        data: property
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating property',
        error: error.message
      });
    }
  },

  // Recipe - 3 images
  createRecipe: async (req, res) => {
    try {
      if (!req.files || req.files.length !== 3) {
        return res.status(400).json({
          success: false,
          message: 'Please upload exactly 3 images'
        });
      }

      const imageUrls = [];
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.buffer, file.mimetype);
        imageUrls.push(result.secure_url);
      }

      const recipeData = {
        ...req.body,
        images: imageUrls
      };

      const recipe = new Recipe(recipeData);
      res.status(201).json({
        success: true,
        message: 'Recipe created successfully',
        data: recipe
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating recipe',
        error: error.message
      });
    }
  },

  // Portfolio - 6 images
  createPortfolio: async (req, res) => {
    try {
      if (!req.files || req.files.length !== 6) {
        return res.status(400).json({
          success: false,
          message: 'Please upload exactly 6 images'
        });
      }

      const imageUrls = [];
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.buffer, file.mimetype);
        imageUrls.push(result.secure_url);
      }

      const portfolioData = {
        ...req.body,
        images: imageUrls
      };

      const portfolio = new Portfolio(portfolioData);
      res.status(201).json({
        success: true,
        message: 'Portfolio created successfully',
        data: portfolio
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating portfolio',
        error: error.message
      });
    }
  },

  // GET APIs
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({
        success: true,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching products',
        error: error.message
      });
    }
  },

  getAllGalleries: async (req, res) => {
    try {
      const galleries = await Gallery.find();
      res.status(200).json({
        success: true,
        data: galleries
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching galleries',
        error: error.message
      });
    }
  },

  getAllProperties: async (req, res) => {
    try {
      const properties = await Property.find();
      res.status(200).json({
        success: true,
        data: properties
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching properties',
        error: error.message
      });
    }
  },

  getAllRecipes: async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json({
        success: true,
        data: recipes
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching recipes',
        error: error.message
      });
    }
  },

  getAllPortfolios: async (req, res) => {
    try {
      const portfolios = await Portfolio.find();
      res.status(200).json({
        success: true,
        data: portfolios
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching portfolios',
        error: error.message
      });
    }
  }
};

module.exports = multiImageController;