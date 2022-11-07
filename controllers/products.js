const { request, response } = require('express');
const productModel = require('../models/product');

const getProductsPagination = (req = request, res = response) => {
  console.log(req.query);
  let { pageSize, pageNumber } = req.query;

  if (isNaN(pageSize) || isNaN(pageNumber)) {
    pageNumber = 1;
    pageSize = 4;
  }

  productModel.getProductsPagination(pageSize, pageNumber, function (error, totalRows, products) {
    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json({ totalRows, products });
    }
  });
};

const getProductsByCategoryPagination = (req = request, res = response) => {
  console.log(req.query);
  let { id, pageSize, pageNumber } = req.query;

  if (isNaN(pageSize) || isNaN(pageNumber)) {
    pageNumber = 1;
    pageSize = 4;
  }

  productModel.getProductsByCategoryIdPagination(
    id,
    pageSize,
    pageNumber,
    function (error, totalRows, products) {
      if (error) {
        res.status(404).json({ message: 'Error en la consulta', error });
      } else {
        res.status(200).json({ totalRows, products });
      }
    }
  );
};

const getProductsByNamePagination = (req = request, res = response) => {
  let { q, pageSize, pageNumber } = req.query;
  console.log(req.query);

  if (isNaN(pageSize) || isNaN(pageNumber)) {
    pageNumber = 1;
    pageSize = 4;
  }

  productModel.getProductsByNamePagination(
    q,
    pageSize,
    pageNumber,
    function (error, totalRows, products) {
      if (error) {
        res.status(404).json({ message: 'Error en la consulta', error });
      } else {
        res.status(200).json({ totalRows, products });
      }
    }
  );
};

module.exports = {
  getProductsByCategoryPagination,
  getProductsByNamePagination,
  getProductsPagination,
};
