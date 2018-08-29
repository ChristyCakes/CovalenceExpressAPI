$(document).ready(function () {


    // create jquery element to display all chirps
    //let allChirps = document.createElement('div')

    let chirps = [];

    // handle API request
    function handleResponse(data) {
        let entries = Object.entries(data)

        console.log(entries)

        for (const [id, chirp] of entries) {
            chirps.push(`${id} ${chirp.user}: ${chirp.text}`);
            
        }
        chirps.pop();
        chirps.map(chirp => $('<p></p>').text(chirp).attr('id', 'chirps').appendTo('.current'))          // create a div containing all the chirps, append to body
    }




    // use ajax request to call api
    $.ajax({
        method: "GET",
        url: 'http://127.0.0.1:3000/api/chirps',        // or use localhost:3000
    }).then(handleResponse)
        .catch(err => console.log(err));














})