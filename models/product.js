const { dbConnection } = require('../db/config');

/* Creating an empty object model. */
const productModel = {};

productModel.getProductsPagination = function (pageSize, pageNumber, callback) {
  let skip = (pageNumber - 1) * pageSize; // first: (1-1)*4=0, second: (2-1)*4=4, third: (3-1)*4=8
  let limit = skip + ',' + pageSize;

  /* Query numPages */
  dbConnection.query('SELECT count(*) as numRows FROM product', function (err, rows, fields) {
    if (err) {
      console.log('error: ', err);
      callback(err, null);
    } else {
      // console.log(rows); // [ RowDataPacket { numRows: 57 } ]
      const totalRows = rows[0].numRows;

      /* Query products */
      dbConnection.query(`SELECT * FROM product LIMIT ${limit}`, function (err, products, fields) {
        if (err) {
          console.log('error: ', err);
          callback(err, null);
        } else {
          // console.log(products);
          callback(null, totalRows, products);
        }
      });
    }
  });
};

productModel.getProductsByCategoryIdPagination = function (id, pageSize, pageNumber, callback) {
  let skip = (pageNumber - 1) * pageSize; // first: (1-1)*4=0, second: (2-1)*4=4, third: (3-1)*4=8
  let limit = skip + ',' + pageSize;

  /* Query numPages */
  dbConnection.query(
    `SELECT count(*) as numRows FROM product WHERE category = ${id}`,
    function (err, rows, fields) {
      if (err) {
        console.log('error: ', err);
        callback(err, null);
      } else {
        // console.log(rows); // [ RowDataPacket { numRows: 57 } ]
        const totalRows = rows[0].numRows;

        /* Query products */
        dbConnection.query(
          `SELECT * FROM product WHERE category = ${id} LIMIT ${limit}`,
          function (err, products, fields) {
            if (err) {
              console.log('error: ', err);
              callback(err, null);
            } else {
              // console.log(products);
              callback(null, totalRows, products);
            }
          }
        );
      }
    }
  );
};

productModel.getProductsByNamePagination = function (q, pageSize, pageNumber, callback) {
  let skip = (pageNumber - 1) * pageSize; // first: (1-1)*4=0, second: (2-1)*4=4, third: (3-1)*4=8
  let limit = skip + ',' + pageSize;

  /* Query numPages */
  dbConnection.query(
    `SELECT count(*) as numRows FROM product WHERE name LIKE "%${q}%"`,
    function (err, rows, fields) {
      if (err) {
        console.log('error: ', err);
        callback(err, null);
      } else {
        // console.log(rows); // [ RowDataPacket { numRows: 57 } ]
        const totalRows = rows[0].numRows;
        // const numRows = rows[0].numRows;
        // const numPages = Math.ceil(numRows / numPerPage);

        /* Query products */
        dbConnection.query(
          `SELECT * FROM product WHERE name LIKE "%${q}%" LIMIT ${limit}`,
          function (err, products, fields) {
            if (err) {
              console.log('error: ', err);
              callback(err, null);
            } else {
              // console.log(products);
              callback(null, totalRows, products);
            }
          }
        );
      }
    }
  );
};

module.exports = productModel;
