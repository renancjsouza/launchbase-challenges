const express = require('express');
const routes = express.Router();

routes.get('/', function(req, res) {
    return res.render('home');
});

routes.get('/teachers', function(req, res) {
    return res.render('teachers/index');
});

routes.get('/students', function(req, res) {
    return res.render('students/index');
});

routes.use(function(req, res) {
    res.status(400).render('not-found');
});

module.exports = routes;