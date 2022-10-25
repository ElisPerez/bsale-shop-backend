const { request, response } = require('express');
const categoryModel = require('../models/category');

/**
 * It gets all the categories from the database and returns them in a JSON format
 * @param [req] - The request object.
 * @param [res] - The response object.
 */
const getCategories = (req = request, res = response) => {
  categoryModel.getCategories(function (error, categories) {
    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json(categories);
    }
  });
};

module.exports = {
  getCategories,
};
