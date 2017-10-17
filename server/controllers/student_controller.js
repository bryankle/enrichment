const Student = require('../database/models/student');

exports.fetchStudents = function(req, res, next) {
	Student.findAll()
		.then(function(student) {
			res.json(student);
		})
}

exports.fetchStudent = function(req, res, next) {
	const id = req.params.id;
	Student.findOne({
		where: {
			id: id
		}
	})
	.then((student) => res.json(student))
}

exports.createStudent = function(req, res, next) {
	const { name, email } = req.body;
	console.log('Student name', name);
	console.log('Student email', email);
	Student.create({
		name,
		email
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

exports.editStudent = function(req, res, next) {
	const id = req.params.id;
	const { name, email, campusId } = req.body;
	console.log('EDIT STUDENT')
	Student.update(
		req.body, 
		{ where: {
			id: id
		}}
	)
}
