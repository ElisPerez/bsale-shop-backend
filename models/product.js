const { dbConnection } = require('../db/config');

/* Creating an empty object model. */
const productModel = {};

productModel.getProductsPagination = function (pageSize, pageNumber, callback) {
  // let numPerPage = pageSize;
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
      // const numRows = rows[0].numRows;
      // const numPages = Math.ceil(numRows / numPerPage);

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
  // let numPerPage = pageSize;
  let skip = (pageNumber - 1) * pageSize; // first: (1-1)*4=0, second: (2-1)*4=4, third: (3-1)*4=8
  let limit = skip + ',' + pageSize;

  /* Query numPages */
  dbConnection.query(`SELECT count(*) as numRows FROM product WHERE category = ${id}`, function (err, rows, fields) {
    if (err) {
      console.log('error: ', err);
      callback(err, null);
    } else {
      // console.log(rows); // [ RowDataPacket { numRows: 57 } ]
      const totalRows = rows[0].numRows;
      // const numRows = rows[0].numRows;
      // const numPages = Math.ceil(numRows / numPerPage);

      /* Query products */
      dbConnection.query(`SELECT * FROM product WHERE category = ${id} LIMIT ${limit}`, function (err, products, fields) {
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
// productModel.getProductsByName = function (q, callback) {
//   dbConnection.query(
//     `SELECT * FROM product WHERE name LIKE "%${q}%"`,
//     function (error, products, fields) {
//       if (error) {
//         callback(error, null);
//         throw error;
//       } else {
//         callback(null, products);
//       }
//     }
//   );
// };

productModel.getProductsByNamePagination = function (q, pageSize, pageNumber, callback) {
  let skip = (pageNumber - 1) * pageSize; // first: (1-1)*4=0, second: (2-1)*4=4, third: (3-1)*4=8
  let limit = skip + ',' + pageSize;

  /* Query numPages */
  dbConnection.query(`SELECT count(*) as numRows FROM product WHERE name LIKE "%${q}%"`, function (err, rows, fields) {
    if (err) {
      console.log('error: ', err);
      callback(err, null);
    } else {
      // console.log(rows); // [ RowDataPacket { numRows: 57 } ]
      const totalRows = rows[0].numRows;
      // const numRows = rows[0].numRows;
      // const numPages = Math.ceil(numRows / numPerPage);

      /* Query products */
      dbConnection.query(`SELECT * FROM product WHERE name LIKE "%${q}%" LIMIT ${limit}`, function (err, products, fields) {
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

  // dbConnection.query(
  //   `SELECT * FROM product WHERE name LIKE "%${q}%"`,
  //   function (error, products, fields) {
  //     if (error) {
  //       callback(error, null);
  //       throw error;
  //     } else {
  //       callback(null, products);
  //     }
  //   }
  // );
};

module.exports = productModel;
