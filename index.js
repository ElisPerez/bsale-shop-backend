require('dotenv').config(); // This is for working with environment variables

/* The above code is creating a new instance of the server class and calling the listen method on it. */
const Server = require('./server/server');

const server = new Server();

server.listen();
