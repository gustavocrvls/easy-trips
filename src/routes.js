const express = require('express');
const AccommodationsController = require('./controllers/AccommodationsController');
const CitiesController = require('./controllers/CitiesController');
const TicketsController = require('./controllers/TicketsController');

const routes = express.Router();

routes.get('/cities', CitiesController.index);

routes.post('/tickets', TicketsController.create);

routes.post('/accommodations', AccommodationsController.create);

module.exports = routes;