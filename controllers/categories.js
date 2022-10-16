const { request, response } = require('express');
const { dbConnection } = require('../mysql/dbConnection');

const getCategories = (req = request, res = response) => {
  try {
    dbConnection.query('SELECT * FROM category', function (error, categories, fields) {
      if (error) throw error;

      res.json(categories);
    });
  } catch (error) {
    console.log('An error here', error);
  }
};

module.exports = {
  getCategories,
};
