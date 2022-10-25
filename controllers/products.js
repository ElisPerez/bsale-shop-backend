const { request, response } = require('express');
const productModel = require('../models/product');

/**
 * It gets all the products from the database and returns them in a JSON format
 * @param [req] - The request object.
 * @param [res] - The response object.
 */
const getProducts = (req = request, res = response) => {
  productModel.getProducts(function (error, products) {
    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json(products);
    }
  });
};

/**
 * It gets the products by category id
 * @param [req] - The request object.
 * @param [res] - The response object.
 */
const getProductsByCategory = (req = request, res = response) => {
  const { id } = req.query;

  productModel.getProductsByCategoryId(id, function (error, products) {
    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json(products);
    }
  });
};

/**
 * It gets the products by name from the database (Search)
 * @param [req] - The request object.
 * @param [res] - The response object.
 */
const getProductsByName = (req = request, res = response) => {
  const { q } = req.query;
  productModel.getProductsByName(q, function (error, products) {
    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json(products);
    }
  });
};

module.exports = {
  getProducts,
  getProductsByCategory,
  getProductsByName,
};
