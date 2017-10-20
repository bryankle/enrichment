const Campus = require('../database/models/campus');
const Student = require('../database/models/student');
const bodyParser = require('body-parser');

module.exports = {

fetchAllCampuses(req, res, next) {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(err => res.send(err))
	},

	fetchCampus(req, res, next) {
		const { id } = req.params;
		Campus.findOne({
			where: { id },
			include: [ Student ]
		})
		.then(campus => res.json(campus))
		.catch(err => res.send(err))
	},

	createCampus(req, res, next) {
		const { name, picture } = req.body;
		Campus.create({
			name,
			picture
		})
		.then(data => res.send(data))
		.catch(err => res.send(err))
	},

	editCampus(req, res, next) {
		const { id } = req.params;
		const { name, picture } = req.body;
		Campus.update(
			req.body,
			{ where: { id }})
		.then(campus => res.send(campus))
		.catch(err => res.send(err))
	},

	deleteCampus(req, res, next) {
		const { id } = req.params;
		return Campus.destroy({ where: { id } })
		.then(rowDeleted => {
		  if(rowDeleted === 1){
		    res.send(200)
		   }
		}, err => {
		    res.send(err);
		})
		.catch(err => res.send(err))
	},

	removeStudent(req, res, next) {
		const { studentId } = req.params;	
		Student.update(
			{ campusId: null },
			{ where: {
				id: studentId
			}}
		)
		.then(student => res.send(studentId))
		.catch(err => res.send('Student not found'))
	},

	addStudent(req, res, next) {
		const { campusId, studentId } = req.params;
		Student.update(
			{ campusId },
			{ where: {
				id: studentId
			}}
		)
		.then(student => res.send(studentId))
		.catch(err => res.send('Student not found'))
	}
}

