const { Router } = require('express');
const { getCategories } = require('../controllers/categories.js');

const router = Router();

// Get all categories - Public

// {{url}}/api/categories
router.get('/', getCategories);

module.exports = router;
