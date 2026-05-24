
const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct } = require('../controllers/productController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/',       getAllProducts);                  // Public
router.post('/add',   protect, adminOnly, addProduct); // Admin only

module.exports = router;