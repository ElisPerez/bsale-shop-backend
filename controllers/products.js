const { request, response } = require('express');
const productModel = require('../models/product');

const getProducts = (req = request, res = response) => {
  productModel.getProducts(function (error, products) {
    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json(products);
    }
  });
};

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
