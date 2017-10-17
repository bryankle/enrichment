const Student = require('../database/models/student');

exports.fetchStudents = function(req, res, next) {
	Student.findAll()
		.then(function(student) {
			res.json(student);
		})
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

// name, email, campusId
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

// exports.editCampus = function(req, res, next) {
// 	const id = req.params.id;
// 	console.log('req.body');
// 	console.log(req.body);
// 	const { name, picture } = req.body;
// 	console.log('name', name);
// 	console.log('picture', picture);
// 	// req.body must contain 'name' or 'picture'
// 	Campus.update(
// 		{ name: name }, // Revisit - find way to edit picture
// 		{ where: {
// 			id: id
// 		}})
// 	.then(function(campus) {
// 		console.log('Update successful')
// 		res.send(campus)
// 	})
// 	.catch((err) => res.send(err))
// // }