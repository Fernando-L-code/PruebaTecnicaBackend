const express = require('express');
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const config = require('./config.js');
const app = express();

const router = require('./network/routes');


app.use(cors({
  origin: 'http://localhost:3000' // O '*' para permitir cualquier origen
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const swaggerDoc = require('./swagger.json');
router(app);




app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.listen(config.server.port, () => {
  console.log('Api escuchando en el puerto ', config.server.port);
});