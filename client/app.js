$(document).ready(function () {

    let chirps = [];
    let user;
    let text;

    // handle API request (api call below) the server responds with a nested object of chirps
    function handleResponse(data) {
        // change object into array of objects
        let entries = Object.entries(data)
        // destructure entries array & extract user & text to chirps array
        for (const [id, chirp] of entries) {
            chirps.push(`${chirp.user}: ${chirp.text}`);
        }
        // remove 'nextid' element in array
        chirps.pop();
        // map over array, 
        chirps.map((chirp, index) => {
            // create a delete button for each chirp, set class
            let x = $('<button>x</button>').attr('class', 'delete');
            // create a paragraph containing each chirp
            let p = $(`<p>${chirp}</p>`).attr({
                // set an id for styling
                id: "chirps",
                // set an index for deleting/updating later
                index: `${index}`
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
        // make a post request with those values
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:3000/api/chirps/',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ "user": `${user}`, "text": `${text}` })
        })
            .then()
            .catch(err => console.log(err));
    })

    // on delete button click
    $(document).on("click", ".delete", () => {
        // set variable for the button's parent (the chirp)
        let chirpToDelete = $(event.target).parent()
        // remove html chirp from display
        chirpToDelete.remove()
        // also send delete request to remove from server
        $.ajax({
            type: "DELETE",
            url: `http://127.0.0.1:3000/api/chirps/${chirpToDelete.attr('index')}`
        })
        .then()
        .catch(err => console.log(err))
            
            



        // console.log($(event.target).parent().attr('index'))
        // $(event.target).parent().remove()
        
    })




})