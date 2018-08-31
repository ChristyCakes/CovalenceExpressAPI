const fs = require('fs');               // import file system
let chirps = { nextid: 0 };             // keep track of chirps

if(fs.existsSync('chirps.json')) {      // check for existing chirps file
    chirps = JSON.parse(fs.readFileSync('chirps.json'));    // if already there, read the file and set chirps count to that file
}

let getChirps = () => {                 // calling getChirps will return all the chirps
    return Object.assign({}, chirps);   // Object.assign creates a copy to send back to protect from manipulation
}

let getChirp = id => {                      // getChirp with id returns copy of one specfic chirp
    return Object.assign({}, chirps[id]);   // method uses object's id to identify chirp
}

let createChirp = (chirp) => {              // createChirp creates a chirp with next available id
    chirps[chirps.nextid++] = chirp;        // saved in chirps object
    writeChirps();                          // call function to write the chirp (below)
};

let updateChirp = (id, chirp) => {          // pass in id & chirp to update existing
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {                   // delete a chirp with specific id that correlates to its index
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {               // chirps written to json
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {                  // export each (no need to export writeChirps because it is for this file only)
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}