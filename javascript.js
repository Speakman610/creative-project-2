document.getElementById('botSubmit').addEventListener('click', function (event) {
    // const fetch = require('node-fetch')
    /* if you are using vanilla javascript,
    there is an in-built function
     called fetch which you can use*/
    event.preventDefault();
    const message = document.getElementById('botInput').value;
    const API_KEY = 'JWm9LD7K8RA3';
    // const API_KEY = process.env.API_KEY
    // get one api key at pgamerx.com/api/register
    fetch(`https://api.pgamerx.com/v5/ai?message=${message}&server=main`, {
        method: "get",
        headers: {
            "Authorization": API_KEY
        }
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        document.getElementById('botOutput').innerHTML = json[0].response;
    });
});

document.getElementById('botInput').addEventListener('keypress', function () {
    document.getElementsByClassName('pageObject').style = "background-color = red";
});