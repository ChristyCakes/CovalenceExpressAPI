const express = require('express');         // import express
const chirpsRouter = require('./chirps');   // import chirps router
const usersRouter = require('./users');     // import users router

let router = express.Router();              // create a new route

router.use('/chirps', chirpsRouter);        // for chirps path, set chirps router
router.use('/users', usersRouter);          // for users path, set users router

module.exports = router;                     // export routers