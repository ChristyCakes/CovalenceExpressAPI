$(document).ready(function () {





    function handleResponse(data) {
        console.log('the ajax request has finished!');
        console.log(data);
    }
    
    $.ajax({                                            // use ajax request to call api
        method: "GET",
        url: 'http://127.0.0.1:3000/api/chirps',        // or use localhost:3000
        contentType: "application/json",
        dataType: 'json'
        // data: JSON.stringify(data)
    }).then(handleResponse)
    .catch(err => console.log(err));
    













})