"use strict"

let mongoose = require('mongoose')

let app = require('./app.js')
let port = process.env.PORT || 4004

app.listen(port, function() {
	console.log("Listening")
})
