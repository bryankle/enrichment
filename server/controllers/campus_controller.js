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

exports.editCampus = function(req, res, next) {
	const id = req.params.id;
	console.log('req.body');
	console.log(req.body);
	Campus.update(
		{ name: 'TEST'},
		{ where: {
			id: id
		}})
	.then(function(campus) {
		console.log('Update successful')
		res.send(campus)
	})
}


// router.put('/articles/:id', function(req, res) {

// 	const id = req.params.id;
// 	const { title } = req.body;

// 	if (title === '') return res.status(500).end();

// 	return Article.update(
// 		{
// 			title
// 		},
// 		{where: { id: id }}
// 	).then(function() {
// 		return Article.findOne({
// 			where: {
// 				id: id
// 			}
// 		})
// 			.then(function(val) {
// 				res.send({
// 					message: 'Updated successfully',
// 					article: val
// 				});
// 			}) 
// 	})
// })
