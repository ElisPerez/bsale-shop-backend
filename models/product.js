const { dbConnection } = require('../db/config');

const productModel = {};

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
