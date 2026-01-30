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

// PUT routes
router.put('/product/:id', multiImageController.updateProduct);
router.put('/gallery/:id', multiImageController.updateGallery);
router.put('/property/:id', multiImageController.updateProperty);
router.put('/recipe/:id', multiImageController.updateRecipe);
router.put('/portfolio/:id', multiImageController.updatePortfolio);

// DELETE routes
router.delete('/product/:id', multiImageController.deleteProduct);
router.delete('/gallery/:id', multiImageController.deleteGallery);
router.delete('/property/:id', multiImageController.deleteProperty);
router.delete('/recipe/:id', multiImageController.deleteRecipe);
router.delete('/portfolio/:id', multiImageController.deletePortfolio);

// Test route
router.post('/test/sample-data', multiImageController.createSampleData);
router.get('/debug/database', multiImageController.debugDatabase);

module.exports = router;