$(document).ready(function () {

    let chirps = [];
    let user;
    let text;

    // handle API request
    function handleResponse(data) {
        let entries = Object.entries(data)
        for (const [id, chirp] of entries) {
            chirps.push(`${id} ${chirp.user}: ${chirp.text}`);           
        }
        chirps.pop();
        chirps.map(chirp => $('<p></p>').text(chirp).attr('id', 'chirps').appendTo('.current'))          // create a div containing all the chirps, append to body
    }

    // use get request to call api
    $.get('http://127.0.0.1:3000/api/chirps').then(handleResponse).catch(err => console.log(err));  // or use localhost:3000

    // on button click, get the value of user input and ...
    $('button').click(() => {
        user = $('#user').val();
        text = $('#text').val();
        // make a post request with those values
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:3000/api/chirps/',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({"user": `${user}`, "text": `${text}`})
        })
        .then(console.log('posted'))
        .catch(err => console.log(err));
    })














})