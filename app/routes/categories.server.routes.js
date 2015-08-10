'use strict';

module.exports = function(app) {
	var categories = require ('../../app/controllers/categories.server.controller');
	var users = require('../../app/controllers/users.server.controller');

	app.route('/categories')
		.get(categories.list)
		.post(users.requiresLogin, categories.create);

	app.route('/categories/:categoryId')
		.get(categories.read)
		.put(users.requiresLogin, categories.update)
		.delete(users.requiresLogin, categories.delete);

	app.param('categoryId', categories.categoryById);
};
