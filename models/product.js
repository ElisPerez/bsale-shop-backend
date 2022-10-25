const { dbConnection } = require('../db/config');

/* Creating an empty object model. */
const productModel = {};

/* A function that is getting all the products from the database. */
productModel.getProducts = function (callback) {
  dbConnection.query('SELECT * FROM product', function (error, products, fields) {
    if (error) {
      callback(error, null);
      throw error;
    } else {
      callback(null, products);
    }
  });
};

/* Getting all the products from the database by category id. */
productModel.getProductsByCategoryId = function (id, callback) {
  dbConnection.query(
    `SELECT * FROM product WHERE category = ${id}`,
    function (error, products, fields) {
      if (error) {
        callback(error, null);
        throw error;
      } else {
        callback(null, products);
      }
    }
  );
};

/* This is a function that is getting all the products from the database by name. (Search) */
productModel.getProductsByName = function (q, callback) {
  dbConnection.query(
    `SELECT * FROM product WHERE name LIKE "%${q}%"`,
    function (error, products, fields) {
      if (error) {
        callback(error, null);
        throw error;
      } else {
        callback(null, products);
      }
    }
  );
};

module.exports = productModel;
