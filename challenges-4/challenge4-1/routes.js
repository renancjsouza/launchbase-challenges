const express = require('express');
const routes = express.Router();

server.get('/', function(req, res) {
    return res.render('home');
});

server.get('/teachers', function(req, res) {
    return res.render('teachers/index');
});

server.get('/students', function(req, res) {
    return res.render('students/index');
});

server.use(function(req, res) {
    res.status(400).render('not-found');
});

module.exports = routes;