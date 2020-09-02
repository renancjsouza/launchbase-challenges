const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {    
    return res.render("index")
})

server.get("/about", function(req, res) {
    const about = {
        avatar: "/images/logo-rocketseat.png",
        brand: "Rocketseat",
        title: "The best technologies in programming, straight to the point and in the right way.",
        resume: "In the midst of so much information and the amount of tools that come up every day, you need someone to take you in the right direction.",
        description: "100% free online courses to get you on the right foot in the most desired technologies on the market.",
        technologies: [
            {
                technology: "Javascript",
                image: "/images/javascript.svg"
            },
            {
                technology: "Javascript ES6+",
                image: "/images/javascript-es6.svg"
            },
            {
                technology: "NodeJS",
                image: "/images/nodejs.svg"
            },
            {
                technology: "ReactJS",
                image: "/images/reactjs.svg"
            },
            {
                technology: "React Native",
                image: "/images/react-native.svg"
            }
        ],
        socialNetworks: [
            {
                name: "GitHub",
                url: "https://github.com/rocketseat"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/rocketseat_oficial"
            },
            {
                name: "Facebook",
                url: "http://fb.com/rocketseat"
            }
        ]

    }
    
    return res.render("about", { about })
})

server.get("/courses", function(req, res) {
    return res.render("courses", { items : courses })
})

server.use(function(req, res) {
    res.status(400).render("not-found")
})

server.listen("5000", function() {
    console.log("Server is runing.")
})