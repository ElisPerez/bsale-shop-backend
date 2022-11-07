const { Router } = require('express');
const {
  // getProducts,
  // getProductsByCategory,
  // getProductsByName,
  getProductsPagination,
  getProductsByCategoryPagination,
  getProductsByNamePagination,
} = require('../controllers/products');

const router = Router();

/* This is a way to define routes in express. */
/* Defining the routes. The first argument is the route, the second is the function that will be called
when the route is hit. */

/* Creating new routes for the router object. */
// The route like this: {{url}}/api/products + ...
router.get('/', getProductsPagination);
// router.get('/', getProducts);
router.get('/category', getProductsByCategoryPagination);
// router.get('/category', getProductsByCategory);
// router.get('/search', getProductsByName);
router.get('/search', getProductsByNamePagination);

module.exports = router;
