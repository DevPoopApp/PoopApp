
// GET my Events
function getMyEvents() {
    authtoken = localstorage.authToken;
    fetch(url_base + 'event/me', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + authtoken
        }
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
            poopapp.myevents = JSON.parse(response);
            showEventMap(poopapp.myevents)
        })
        .catch(err => console.log(err));

};

// Create Event
function createEvent_() {
    authtoken = localstorage.authToken;
    evaluation = document.getElementById("evaluation").value;

    fetch(url_base + 'event/post', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + authtoken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'evaluation': evaluation,
            'location': loc_4326
        })
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
        })
        .catch(err => console.log(err));

};