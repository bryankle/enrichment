const express = require('express');
const CampusController = require('../controllers/campus_controller');
const StudentController = require('../controllers/student_controller');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send('Hello world')
	})
	// Campus Routes
	app.get('/api/campus', CampusController.fetchAllCampuses);
	app.get('/api/campus/:id/', CampusController.fetchCampus)
	app.put('/api/campus/remove/:studentId', CampusController.removeStudent)
	app.put('/api/campus/:id/', CampusController.editCampus);
	app.post('/api/campus', CampusController.createCampus);
	app.delete('/api/campus/:id', CampusController.deleteCampus);

	// Student Routes
	app.get('/api/student', StudentController.fetchStudents);
	app.get('/api/student/:id', StudentController.fetchStudent)
	app.delete('/api/student/:id', StudentController.deleteStudent);
	app.post('/api/student', StudentController.createStudent);
	app.put('/api/student/:id', StudentController.editStudent);
}