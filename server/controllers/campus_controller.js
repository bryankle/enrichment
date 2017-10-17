const Campus = require('../database/models/campus');

exports.fetchCampus = function(req, res, next) {
	Campus.findAll()
		.then(function(campus) {
			res.json(campus);
		})
}