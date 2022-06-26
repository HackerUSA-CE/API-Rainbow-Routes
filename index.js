// Get the environment variables
require('dotenv').config()

// Require needed node modules
const express = require('express')

// Initialize your application by calling the function returned by the express module
const app = express()

// Declare routes that people can visit on the application

// White Page
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})


// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
        </body>
    `)
})


// Listen to a port number defined by a local environment variable
app.listen(process.env.PORT)