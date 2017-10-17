const Campus = require('../database/models/campus');
const Student = require('../database/models/student');
const bodyParser = require('body-parser');

// Fetch all campuses
exports.fetchAllCampuses = function(req, res, next) {
	Campus.findAll()
		.then(function(campuses) {
			res.json(campuses);
		})
}

// Fetch single campus
exports.fetchCampus = function(req, res, next) {
	Campus.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(function(campus) {
		res.json(campus);
	})
}

exports.createCampus = function(req, res, next) {
	const { name, picture } = req.body;
	Campus.create({
		name,
		picture
	})
}

exports.editCampus = function(req, res, next) {
	const id = req.params.id;
	console.log('req.body');
	console.log(req.body);
	const { name, picture } = req.body;
	console.log('name', name);
	console.log('picture', picture);
	// req.body must contain 'name' or 'picture'
	Campus.update(
		{ name: name },
		{ where: {
			id: id
		}})
	.then(function(campus) {
		console.log('Update successful')
		res.send(campus)
	})
	.catch((err) => res.send(err))
}

exports.deleteCampus = function(req, res, next) {
	const id = req.params.id;
	Campus.findOne({
		where: {
			id
		}
	})
	.then(campus => campus.destroy());
}

// Add student from campus
// Drop down contains all students (no school) OR input
// Submit name of student
// PUT request on student name and edit campusId to campusId of current page


// Removes student by ID
exports.removeStudent = function(req, res, next) {
	const studentId = req.params.studentId;
	console.log('studentId', studentId)
	
	Student.update(
		{ campusId: null },
		{ where: {
			id: studentId
		}}
	)
	.then(function(student) {
		console.log(student)
	})
	.catch(err => res.send('Student not found'))
}

// exports.addStudent = function(req, res, next) {
// 	const studentId = req.params.studentId;
// // 	const campusId = req.params.campusId;
// 	student.update({
// 		{ campusId: campusId },
// 		{ where: {
// 			id: studentId
// 		}}
// 	})
// }

// Deleting a student
// Click remove button next to students name
// Student remove button associated with student Id
// PUT request to edit students campusId to ''
