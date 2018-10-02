const express = require('express');         // import express
const chirpsRouter = require('./chirps');   // import chirps router

let router = express.Router();              // create a new route
router.use('/chirps', chirpsRouter);        // for chirps path, set chirps router
module.exports = router;                     // export routers