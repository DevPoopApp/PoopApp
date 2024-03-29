
// Login
function login() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    fetch(url_base + 'auth/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
            token = JSON.parse(response).authToken;
            localstorage.authToken = token;
            saveLocalStorage();
        })
        .catch(err => console.log(err));

};

// Signup
function signup() {
    pseudo = document.getElementById("pseudo").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    fetch(url_base + 'auth/signup', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'pseudo': pseudo,
            'email': email,
            'password': password
        })
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
            token = JSON.parse(response).authToken;
            localstorage.authToken = token;
            saveLocalStorage();
        })
        .catch(err => console.log(err));

};

// My Profil
function getMyProfile() {
    authtoken = localstorage.authToken;
    fetch(url_base + 'auth/me', {
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
}