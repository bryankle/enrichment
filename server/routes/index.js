const express = require('express');
const CampusController = require('../controllers/campus_controller');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send('Hello world')
	})

	app.get('/api/campus', CampusController.fetchCampus);
}