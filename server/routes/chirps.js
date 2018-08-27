const express = require('express');
const chirpsStore = require('../filestore')
let router = express.Router();


// get request (get all chirps or get one chirp by id)
router.get('/:id?', (req, res) => {     // set id as optional parameter (get request by id)
    let id = req.params.id;             // set variable for the id
    if (id) {                                    // if id requested,                 
        res.json(chirpsStore.GetChirp(id));      // send back the matching chirp     **Capitalize modules
    } else {
        res.send(chirpsStore.GetChirps());       // otherwise, send back all chirps
    }
});

// post request to create a chirp
router.post('/', (req, res) => {            // create a router for posting chirps
    chirpsStore.CreateChirp(req.body);      // create a chirp with the body of the request
    res.sendStatus(200);                    // respond with success status code
})

// put request to update a chirp by id
router.put('/:id', (req, res) => {              // create a router for updating chirps
    let id = req.params.id;
    chirpsStore.UpdateChirp(id, req.body);      // update a chirp by id with the body of the request
    res.sendStatus(200);
})

// delete request to delete a chirp by id
router.delete('/:id', (req, res) => {          // create a router for deleting chirps
    let id = req.params.id;
    chirpsStore.DeleteChirp(id);            // delete chirp by id
    res.sendStatus(200);
})

module.exports = router;