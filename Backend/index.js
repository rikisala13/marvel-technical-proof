const express = require('express');
require('dotenv').config();

const morgan = require('morgan');

require('./src/config/moongooseConfig');

const server = express();
const port = process.env.PORT || 5001;

server.use(morgan('dev'));
server.use(express.json());

// Rutas
const charactersRouter = require('./src/routes/charactersRoute');

// path de las rutas
server.use('/', charactersRouter);

// mensaje que se va a mostrar por consola cuando se levante el servidor
server.listen(
  port,
  () => console.log(`Server is running on http://localhost:${port}`)
);
