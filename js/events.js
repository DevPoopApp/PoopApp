
// GET my Events
function getMyEvents() {
    authtoken = document.getElementById("authtoken").value;
    fetch(url_base + 'event/me', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + authtoken
        }
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
        })
        .catch(err => console.log(err));

};

// Create Event
function createEvent_() {
    authtoken = document.getElementById("authtoken").value;
    evaluation = document.getElementById("evaluation").value;
    special = document.getElementById("special").value;
    fetch(url_base + 'event/post', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + authtoken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'evaluation': evaluation,
            'special': special,
            'location': null
        })
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
        })
        .catch(err => console.log(err));

};