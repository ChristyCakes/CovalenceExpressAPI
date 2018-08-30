$(document).ready(function () {

    let chirps = [];
    let user;
    let text;

    // handle API request (api call below) the server responds with a nested object of chirps
    function handleResponse(data) {
        // change object into array of objects for iteration
        let entries = Object.entries(data)
        console.log(entries)
        // destructure entries array & extract user, text, & timestamp in an object to chirps array
        for (const [id, data] of entries) {
            chirps.push({
                "user": `${data.user}`,
                "text": `${data.text}`, 
                "time": `${data.time}`,
                "id": `${id}`
            });
        }
        
        // remove 'nextid' element in array
        chirps.pop();
        // map over array, for each object in the array ...
        chirps.map(chirp => {
            // create a delete button for each chirp, set class
            let x = $('<button>x</button>').attr('class', 'delete');
            // create a paragraph containing each chirp, set a class for styling, set id with timestamp, append a delete button to each paragraph
            let p = $(`<p>${chirp.user}: ${chirp.text}</p>`).attr({
                class: "chirps",
                id: `${chirp.id}`
            }).append(x);
            // append each paragraph to div
            $('.current').append(p)
        })
    }

    // use get request to call api
    $.get('http://127.0.0.1:3000/api/chirps').then(handleResponse).catch(err => console.log(err));      // or use localhost:3000

    // on submit button click, get the value of user inputs and ...
    $('#submit').click(() => {
        user = $('#user').val();
        text = $('#text').val();
        // get a timestamp
        let time = (new Date().getTime())
        // make a post request with those values
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:3000/api/chirps/',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                "user": `${user}`,
                "text": `${text}`,
                "time": `${time}`
            })
        })
            .catch(err => console.log(err));
    })

    // on delete button click
    $(document).on("click", ".delete", event => {
        // set variable for the button's parent (the chirp)
        let chirpToDelete = $(event.target).parent()
        // remove html chirp from display
        chirpToDelete.remove()
        // also send delete request to remove from server
        $.ajax({
            type: "DELETE",
            url: `http://127.0.0.1:3000/api/chirps/${chirpToDelete.attr('id')}`
        })
            .then(() => console.log(`deleted chirp ${chirpToDelete.attr('id')}`))
            .catch(err => console.log(err))
    })







})