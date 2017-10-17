const Student = require('../database/models/student');

exports.fetchStudents = function(req, res, next) {
	Student.findAll()
		.then(function(student) {
			res.json(student);
		})
}