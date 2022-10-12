
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require("helmet");
const  morgan = require('morgan')
require('dotenv').config()
const {getDataQuery } = require("./firebase");
 
const startKata = require('./template/index')

const {notFound} = require('./middlewares/handleErrors')
const {api} = require('./api')


app.use(morgan('dev'))
app.use(cors())
app.use(helmet());
app.use(express.json())
  

app.get("/:query", async (req, res) => {
    /* Destructuring the req.params object. */
    const { collection, id } = req.params;
    const response = await getDataQuery('codes', ['slug',req.params.query]);
   
    res.send(startKata(response?.title, response?.codes));
  });


app.use('/api/v1', api)


app.use(notFound)

module.exports= {app}
 

