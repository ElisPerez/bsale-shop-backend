const { Router } = require('express');
const { getProducts, getProductsByCategory, getProductsByName } = require('../controllers/products');

const router = Router();

// {{url}}/api/products
router.get('/', getProducts);
router.get('/category', getProductsByCategory);
router.get('/search', getProductsByName);

module.exports = router;
