const express = require('express');
const CampusController = require('../controllers/campus_controller');
const StudentController = require('../controllers/student_controller');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send('Hello world')
	})

	app.get('/api/campus', CampusController.fetchCampus);
	app.get('/api/student', StudentController.fetchStudents);
}