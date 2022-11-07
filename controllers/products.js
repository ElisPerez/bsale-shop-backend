const { request, response } = require('express');
const productModel = require('../models/product');

const getProductsPagination = (req = request, res = response) => {
  // console.log(req.query);
  let { pageSize, pageNumber } = req.query;

  if (isNaN(pageSize) || isNaN(pageNumber)) {
    pageNumber = 1;
    pageSize = 4;
  }

  pageSize * 1 <= 0 && (pageSize = 4);
  pageNumber * 1 <= 0 && (pageNumber = 1);

  const baseUrl = 'https://bsale-shop-backend-elis.herokuapp.com/api/products';
  let next = `${baseUrl}?pageSize=${pageSize}&pageNumber=${pageNumber * 1 + 1}`;
  let previous = `${baseUrl}?pageSize=${pageSize}&pageNumber=${pageNumber * 1 - 1}`;

  productModel.getProductsPagination(pageSize, pageNumber, function (error, count, products) {
    const numPages = Math.ceil(count / (pageSize * 1));

    pageNumber < 2 && (previous = null);

    pageNumber >= numPages && (next = null);

    pageNumber > numPages && (previous = `${baseUrl}?pageSize=${pageSize}&pageNumber=${numPages}`);

    if (error) {
      res.status(404).json({ message: 'Error en la consulta', error });
    } else {
      res.status(200).json({ count, next, previous, products });
    }
  });
};

const getProductsByCategoryPagination = (req = request, res = response) => {
  // console.log(req.query);
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
  // console.log(req.query);
  let { q, pageSize, pageNumber } = req.query;

  if (isNaN(pageSize) || isNaN(pageNumber)) {
    pageNumber = 1;
    pageSize = 4;
  }

  productModel.getProductsByNamePagination(
    q, // Search term
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
