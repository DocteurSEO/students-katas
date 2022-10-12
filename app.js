
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require("helmet");
const  morgan = require('morgan')
require('dotenv').config()

const {notFound} = require('./middlewares/handleErrors')
const {api} = require('./api')


app.use(morgan('dev'))
app.use(cors())
app.use(helmet());
app.use(express.json())
 

app.use('/api/v1', api)

app.use(notFound)

module.exports= {app}
 

