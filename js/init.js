const url_base = 'https://x8ki-letl-twmt.n7.xano.io/api:zs9zXs1v/';
let authtoken = null;
let email = null;
let password = null;

let poopapp = { myevents: null };
let localstorage = {};

var loc_4326;

// Load profil if token in localstorage
loadLocalStorage();
if (localstorage.authToken) {
    getMyProfile();
}