const Campus = require('../database/models/campus');

// Fetch all campuses
exports.fetchCampuses = function(req, res, next) {
	Campus.findAll()
		.then(function(campuses) {
			res.json(campuses);
		})
}

// Fetch single campus
exports.fetchCampus = function(req, res, next) {
	Campus.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(function(campus) {
		res.json(campus);
	})
}

