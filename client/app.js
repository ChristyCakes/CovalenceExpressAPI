$(document).ready(function () {

    let chirps = [];
    let user;
    let text;

    // handle API request (below)
    function handleResponse(data) {
        // change object into array of objects
        let entries = Object.entries(data)
        // destructure & extract to chirps array
        for (const [id, chirp] of entries) {
            chirps.push(`${id} ${chirp.user}: ${chirp.text}`);           
        }
        // remove 'nextid' element in array
        chirps.pop();
        // map over array, 
        chirps.map(chirp => {
            // create a delete button for each chirp, set id
            let x = $('<button>x</button>').attr('id', 'delete');
            // create a paragraph containing each chirp, set id, append delete button
            let p = $(`<p>${chirp}</p>`).attr('id', 'chirps').append(x);
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
            data: JSON.stringify({"user": `${user}`, "text": `${text}`})
        })
        .then()
        .catch(err => console.log(err));
    })

    // on delete button click
    $('#delete').click( () => {
        $.delete(`http://127.0.0.1:3000/api/chirps/${?}`)
    })







})