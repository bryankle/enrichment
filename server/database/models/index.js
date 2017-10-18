const db = require('./db');
const Student = require('./student');
const Campus = require('./campus');

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
	db,
	Student,
	Campus
}
