const express = require('express');
const eventController = require('../controller/event-controller');
const routes = express.Router();

routes.post('/',eventController.getEventsById);

routes.post('/create',eventController.createEventById);

module.exports = routes;