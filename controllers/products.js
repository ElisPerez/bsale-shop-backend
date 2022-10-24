const { request, response } = require('express');
const { dbConnection } = require('../db/dbConnection');

const getProducts = (req = request, res = response) => {
  try {
    dbConnection.query('SELECT * FROM product', function (error, products, fields) {
      if (error) throw error;

      res.json(products);
    });
  } catch (error) {
    console.log('An error here', error);
  }
};

const getProductsByCategory = (req = request, res = response) => {
  const { id } = req.query;
  try {
    dbConnection.query(
      `SELECT * FROM product WHERE category = ${id}`,
      function (error, products, fields) {
        if (error) throw error;

        res.json(products);
      }
    );
  } catch (error) {
    console.log('An error here', error);
  }
};

const getProductsByName = (req = request, res = response) => {
  const { q } = req.query;
  try {
    dbConnection.query(
      `SELECT * FROM product WHERE name LIKE "%${q}%"`,
      function (error, products, fields) {
        if (error) {
          res.json((products = []));
        }

        res.json(products);
      }
    );
  } catch (error) {
    console.log('An error here', error);
  }
};

module.exports = {
  getProducts,
  getProductsByCategory,
  getProductsByName,
};

