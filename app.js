"use strict"

let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

module.exports = app