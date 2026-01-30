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
      await product.save();
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
      await gallery.save();
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
      await property.save();
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
      await recipe.save();
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
      await portfolio.save();
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
      console.log('Fetching products from database...');
      const products = await Product.find();
      console.log('Products found:', products.length);
      console.log('Products data:', products);
      res.status(200).json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      console.error('Error in getAllProducts:', error);
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
  },

  // PUT APIs
  updateProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error updating product', error: error.message });
    }
  },

  updateGallery: async (req, res) => {
    try {
      const gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!gallery) {
        return res.status(404).json({ success: false, message: 'Gallery not found' });
      }
      res.status(200).json({ success: true, data: gallery });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error updating gallery', error: error.message });
    }
  },

  updateProperty: async (req, res) => {
    try {
      const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      res.status(200).json({ success: true, data: property });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error updating property', error: error.message });
    }
  },

  updateRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!recipe) {
        return res.status(404).json({ success: false, message: 'Recipe not found' });
      }
      res.status(200).json({ success: true, data: recipe });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error updating recipe', error: error.message });
    }
  },

  updatePortfolio: async (req, res) => {
    try {
      const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!portfolio) {
        return res.status(404).json({ success: false, message: 'Portfolio not found' });
      }
      res.status(200).json({ success: true, data: portfolio });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error updating portfolio', error: error.message });
    }
  },

  // DELETE APIs
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error deleting product', error: error.message });
    }
  },

  deleteGallery: async (req, res) => {
    try {
      const gallery = await Gallery.findByIdAndDelete(req.params.id);
      if (!gallery) {
        return res.status(404).json({ success: false, message: 'Gallery not found' });
      }
      res.status(200).json({ success: true, message: 'Gallery deleted successfully' });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error deleting gallery', error: error.message });
    }
  },

  deleteProperty: async (req, res) => {
    try {
      const property = await Property.findByIdAndDelete(req.params.id);
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      res.status(200).json({ success: true, message: 'Property deleted successfully' });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error deleting property', error: error.message });
    }
  },

  deleteRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) {
        return res.status(404).json({ success: false, message: 'Recipe not found' });
      }
      res.status(200).json({ success: true, message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error deleting recipe', error: error.message });
    }
  },

  deletePortfolio: async (req, res) => {
    try {
      const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
      if (!portfolio) {
        return res.status(404).json({ success: false, message: 'Portfolio not found' });
      }
      res.status(200).json({ success: true, message: 'Portfolio deleted successfully' });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error deleting portfolio', error: error.message });
    }
  },

  // Test route to create sample data
  createSampleData: async (req, res) => {
    try {
      const sampleProduct = new Product({
        name: 'Sample iPhone',
        description: 'Test product',
        price: 999,
        category: 'Electronics',
        brand: 'Apple',
        stock: 10,
        mainImage: 'https://via.placeholder.com/300x300',
        thumbnailImage: 'https://via.placeholder.com/150x150'
      });
      await sampleProduct.save();
      
      res.status(201).json({
        success: true,
        message: 'Sample data created',
        data: sampleProduct
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating sample data',
        error: error.message
      });
    }
  },

  // Debug route to check database
  debugDatabase: async (req, res) => {
    try {
      const mongoose = require('mongoose');
      const dbState = mongoose.connection.readyState;
      const collections = await mongoose.connection.db.listCollections().toArray();
      
      const productCount = await Product.countDocuments();
      const allProducts = await Product.find().lean();
      
      res.status(200).json({
        success: true,
        dbState: dbState, // 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
        collections: collections.map(c => c.name),
        productCount: productCount,
        products: allProducts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Debug error',
        error: error.message
      });
    }
  }
};

module.exports = multiImageController;