const Student = require('../database/models/student');

exports.fetchStudents = function(req, res, next) {
	Student.findAll()
		.then(function(student) {
			res.json(student);
		})
}

exports.deleteStudent = function(req, res, next) {
	const id = req.params.id;
	Student.findOne({
		where: {
			id
		}
	})
	.then(student => student.destroy());
}