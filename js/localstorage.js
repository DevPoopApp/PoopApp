// Chargement du localstorage
function loadLocalStorage() {
    localstorage = JSON.parse(localStorage.getItem('poopapp'));

    // Création si pas encore existant
    if (!localstorage) {
        localstorage = { authToken: null }
    };
};

// Fonction d'enregistrement dans le localstorage
function saveLocalStorage() {
    let dict = JSON.stringify(localstorage)
    localStorage.setItem('poopapp', dict);
};