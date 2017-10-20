const Student = require('../database/models/student');
const Campus = require('../database/models/campus');

module.exports = {

	fetchAllStudents(req, res, next) {
		Student.findAll({
			include: [ Campus ]
		})
		.then(student => res.json(student))
		.catch(err => res.send(err))
	},
	fetchStudent(req, res, next) {
		const { id } = req.params;
		Student.findOne({
			include: [ Campus ],
			where: { id }
		})
		.then(student => res.json(student))
		.catch(err => res.send(err))
	},
	createStudent(req, res, next) {
		const { name, email } = req.body;
		Student.create({
			name,
			email
		})
		.then(student => res.send(student))
		.catch(err => res.send(err))
	},
	deleteStudent(req, res, next) {
		const { id } = req.params;
		return Student.destroy({
		    where: {
		        id: id
		    }
		})
		.then(rowDeleted => {
		  if(rowDeleted === 1){
		     res.send(200)
		   }
		}, err => res.send(err))
		.catch(err => res.send(err))
	},
	editStudent(req, res, next) {
		const { id } = req.params;
		const { name, email, campusId, campusName } = req.body;
		Student.update(
			req.body, 
			{ where: { id }}
		)
		.then(data => res.send(req.body))
		.catch(err => res.send(err))
	}
}
