
// Add Friend
function addFriend() {
    friend_id = document.getElementById("friend_id").value;
    fetch(url_base + 'friend/add', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + authtoken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'requested': friend_id,
        })
    })
        .then(response => response.text())
        .then((response) => {
            document.getElementById("console").innerHTML = response;
        })
        .catch(err => console.log(err));

};