const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'njk');
server.use(express.static('public'));

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res) {
    return res.render('home');
});

server.get('/teachers', function(req, res) {
    return res.render('teachers');
});

server.get('/students', function(req, res) {
    return res.render('students');
});

server.use( function(req, res) {
    res.status(400).render('not-found');
});

server.listen(4000, function() {
    console.log(`Server is runing.`);
});