const express = require('express');
require('dotenv').config();
// debuguear
// const debug = require('debug');
// resaltar cosas en terminal
const morgan = require('morgan');

require('./src/config/moongooseConfig');

const server = express();
const port = process.env.PORT || 5001;

server.use(express.json);

server.use(express.json());
server.use(morgan('dev'));

server.get('/', (request, response) => {
  response.send('<h1>hello world</h1>');
});
// Rutas
const charactersRouter = require('./src/routes/charactersRoute');

// path de las rutas
server.use('/characters', charactersRouter);

// mensaje que se va a mostrar por consola cuando se levante el servidor
server.listen(
  port,
  () => console.log(`Server is running on http://localhost${port}`)
);
