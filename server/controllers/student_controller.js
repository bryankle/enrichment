const Student = require('../database/models/student');
const Campus = require('../database/models/campus');


exports.fetchAllStudents = function(req, res, next) {
	Student.findAll({
		include: [ Campus ]
	})
		.then(function(student) {
			res.json(student);
		})
}

exports.fetchStudent = function(req, res, next) {
	const id = req.params.id;
	Student.findOne({
		include: [ Campus ],
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
	.then(student => res.send(student))
}

exports.deleteStudent = function(req, res, next) {
	const id = req.params.id;
	return Student.destroy({
	    where: {
	        id: id
	    }
	})
	.then(function(rowDeleted){ // rowDeleted will return number of rows deleted
	  if(rowDeleted === 1){
	     console.log('Deleted successfully');
	     res.send(200)
	   }
	}, function(err){
	    console.log(err); 
	});
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
