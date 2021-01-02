const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const Mailchimp = require('mailchimp-api-v3')
require('dotenv').config()

//enviroment variables//
const mailchimpAPIKey = process.env.MAILCHIMP_API_KEY
const audienceID = process.env.AUDIENCE_ID

// initialing server//
const server = express()
// setting up for cors//
server.use(cors())
//mailchimp instance //
// const mailchimp = new Mailchimp(mailchimpAPIKey)

// parse various data//
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

// parsing routes//
const routes = require('./api/routes')
routes(server)

//setting up the port//
server.listen(PORT, () => {
    console.log(`Mailing micro-service is now active on  port ${PORT}`)
})