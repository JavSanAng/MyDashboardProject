const express = require('express')
const app = express()
const {dbConennection} = require('./config/config');
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

dbConennection();

const port = 8080;

app.listen(port, ()=>{
    console.log (`Listening port http://localhost:${port}`)
})
