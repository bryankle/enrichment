const Campus = require('../database/models/campus');

exports.fetchCampuses = function(req, res, next) {
	Campus.findAll()
		.then(function(campuses) {
			res.json(campuses);
		})
}

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

// router.get('/articles/:id', function(req, res) {
// 	const id = req.params.id;
// 	return Article.findOne({
// 		where: {
// 			id: req.params.id
// 		}
// 	}).then(function(article) {
// 		article !== null ? res.send(article) :  res.status(404).end();
// 	})
// });