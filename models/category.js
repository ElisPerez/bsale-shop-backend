const { dbConnection } = require('../db/config');

const categoryModel = {};

categoryModel.getCategories = function (callback) {
  dbConnection.query('SELECT * FROM category', function (error, categories, fields) {
    if (error) {
      callback(error, null);
      throw error;
    } else {
      callback(null, categories);
    }
  });
};

module.exports = categoryModel;
