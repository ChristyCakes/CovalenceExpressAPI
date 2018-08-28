// to run, cd to expressapi directory in cmd, type 'node server/server.js' and '

const express = require('express');     // import express
const cors = require('cors');           // import cors; allows calling resources from different domains
const apiRouter = require('./routes')   // import all routes in route folder (automatically looks for index.js)
const path = require('path');

let app = express();            

app.use(cors());                      
app.use(express.json());        // use body parser middleware to parse posted JSON content into JS

app.use('/api', apiRouter);     // for this path, use this router from index.js

app.use(express.static(path.join(__dirname, '../client')));     // use static middleware to serve up client files automatically

app.listen(3000);               // listen on port 3000