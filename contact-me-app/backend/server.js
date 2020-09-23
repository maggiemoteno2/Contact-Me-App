const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const server = express()

const {MongoServer} = require('./config/dbConnection')
const { postCompanies } = require('./routes/companies')
const { getCompanies} = require('./routes/companies')
const { customerQuestion } = require('./routes/customer')

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

customerQuestion(server)
MongoServer(server) 
postCompanies(server)
getCompanies(server)


server.listen(port, () => {
  console.log(`listening to port ${port}`)
})