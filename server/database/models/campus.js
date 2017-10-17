const db = require('./db');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	picture: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = Campus;