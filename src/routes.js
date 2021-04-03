const express = require('express');
const CitiesController = require('./controllers/CitiesController');
const TicketsController = require('./controllers/TicketsController');

const routes = express.Router();

routes.get('/cities', CitiesController.index);

routes.post('/tickets', TicketsController.create);

module.exports = routes;