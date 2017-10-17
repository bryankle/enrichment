const express = require('express');
const CampusController = require('../controllers/campus_controller');
const StudentController = require('../controllers/student_controller');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send('Hello world')
	})

	app.get('/api/campus', CampusController.fetchAllCampuses);
	app.get('/api/campus/:id', CampusController.fetchCampus)
	app.put('/api/campus/:id', CampusController.editCampus);
	app.post('/api/campus', CampusController.createCampus);

	app.get('/api/student', StudentController.fetchStudents);
}