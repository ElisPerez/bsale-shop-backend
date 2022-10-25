const { dbConnection } = require('../db/config');

/* Creating an empty object model. */
const categoryModel = {};

/* A function that is getting all the categories from the database. */
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
