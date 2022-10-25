const { request, response } = require('express');
const categoryModel = require('../models/category');

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
