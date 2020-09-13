const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server
})

server.get('/', function(req, res) {
    return res.render("index", { recipes })
})

server.get('/about', function(req, res) {
    return res.render("about")
})

server.get('/recipes', function(req, res) {
    return res.render("recipes", { recipes })
})

server.get('/recipes/:index', function(req, res) {
    const recipeIndex = req.params.index

    const recipe = recipes[recipeIndex]

    return res.render("recipe", { recipe })
})

server.use(function(req, res) {
    res.status(400).render("not-found")
})

server.listen(5000, function() {
    console.log('Server is runing!')
})