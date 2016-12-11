'use strict';

// Requires

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');

// Data
var dinoJson = require('./data/dinosaurs.json');
var ideaJson = require('./data/ideas.json');
// not finshed yet
// var jokesJson = require('./data/jokes.json');
// var starWarsJson = require('./data/star-wars.json');
// var usersJson = require('./data/users.json');

// Variables
var app = express();
var allDinos = getAllDinos();
var allIdeas = getAllIdeas();

//---- Set up Express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//----- GET Routes

app.get('/api/dinosaurs', function (req, res) {
	res.json(allDinos);
});

app.get('/api/dinosaur/:id', function (req, res) {
	var id = req.params.id * 1;
	var thisDino = _.find(dinoJson, { id: id });
	res.json(thisDino);
});

app.get('/api/ideas', function (req, res) {
	res.json(allIdeas);
});

app.get('/api/idea/:id', function (req, res) {
	var id = req.params.id * 1;
	var thisIdea = _.find(ideaJson, { id: id });
	res.json(thisIdea);
});

//---- Serve

app.listen(8000);
console.log('Listening on localhost:8000');

/**
 * Get all dinosaurs (abbreviated details)
 * [{ id: number, name: string }]
 *
 * @returns {array}
 */
function getAllDinos() {
	return _.map(dinoJson, function (obj) {
		return {
			id: obj.id,
			name: obj.name
		};
	});
}
/**
 * Get all ideas (abbreviated details)
 * [{ id: number, name: string }]
 *
 * @returns {array}
 */
function getAllIdeas() {
	return _.map(ideaJson, function (obj) {
		return {
			id: obj.id,
			title: obj.title
		};
	});
}
/**
 * Get all jokes (abbreviated details)
 * [{ id: number, name: string }]
 *
 * @returns {array}
 */
function getAllJokes() {
	return _.map(jokeJson, function (obj) {
		return {
			id: obj.id,
			name: obj.name
		};
	});
}
