document.getElementById('chatSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    var chatbox = document.getElementById('chatbox').innerHTML;
    const userMessage = document.getElementById('chatInput').value;
    chatbox = chatbox + '<p class="userMessage">' + userMessage + '</p>';
    document.getElementById('chatbox').innerHTML = chatbox;
    const API_KEY = 'JWm9LD7K8RA3';
    fetch(`https://api.pgamerx.com/v5/ai?message=${userMessage}&server=main`, {
        method: "get",
        headers: {
            "Authorization": API_KEY
        }
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        botMessage = '<p class="botMessage">' + json[0].response + '</p>';
        document.getElementById('chatbox').innerHTML = chatbox + botMessage;
    });
});

// document.getElementById('botInput').addEventListener('keypress', function () {
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.getElementById('botInput').style.color = '#' + randomColor;
// });