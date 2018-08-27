// to run, cd to expressapi directory in cmd, type 'node server/server.js' and '

const express = require('express');     // import express
const cors = require('cors');           // import cors; allows calling resources from different domains
const apiRouter = require('./routes')   // import all routes in route folder (automatically looks for index.js)

let app = express();

app.use(cors());                      
app.use(express.json());        // use body parser middleware to parse posted JSON content into JS

app.use('./api', apiRouter);

app.listen(3000);