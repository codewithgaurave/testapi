const express = require('express');
const router = express.Router();
const multiImageController = require('../controllers/multiImageController');
const upload = require('../middleware/upload');

// POST routes
// Product - 2 images
router.post('/product', upload.array('images', 2), multiImageController.createProduct);

// Gallery - 8 images  
router.post('/gallery', upload.array('images', 8), multiImageController.createGallery);

// Property - 4 images
router.post('/property', upload.array('images', 4), multiImageController.createProperty);

// Recipe - 3 images
router.post('/recipe', upload.array('images', 3), multiImageController.createRecipe);

// Portfolio - 6 images
router.post('/portfolio', upload.array('images', 6), multiImageController.createPortfolio);

// GET routes
router.get('/products', multiImageController.getAllProducts);
router.get('/galleries', multiImageController.getAllGalleries);
router.get('/properties', multiImageController.getAllProperties);
router.get('/recipes', multiImageController.getAllRecipes);
router.get('/portfolios', multiImageController.getAllPortfolios);

module.exports = router;