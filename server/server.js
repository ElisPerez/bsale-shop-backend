const express = require('express');
const cors = require('cors');

/* It's a class that creates an Express server and sets up the middlewares and routes */
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      categories: '/api/categories',
      products: '/api/products',
    };

    this.middlewares();

    this.routes();
  }

  // methods
  middlewares() {
    // CORS
    this.app.use(cors());

    // Body Parser
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.categories, require('../routes/categories'));
    this.app.use(this.paths.products, require('../routes/products'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
