const db = require('./db');
const Student = require('./students');
const Campus = require('./campus');

Campus.hasMany(Student);

module.exports = {
	db,
	Student,
	Campus
}
