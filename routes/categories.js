const { Router } = require('express');
const { getCategories } = require('../controllers/categories.js');

/* Creating a new router object. */
const router = Router();

/* This is a way to define routes in express. */
/* Defining the routes. The first argument is the route, the second is the function that will be called
when the route is hit. */

/* Creating a new route for the router object. */
// The route like this: {{url}}/api/categories + ...
router.get('/', getCategories);

module.exports = router;
