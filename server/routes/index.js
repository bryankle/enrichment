const express = require('express');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send('Hello world')
	})
}