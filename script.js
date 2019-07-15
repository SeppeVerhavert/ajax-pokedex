document.getElementById('searchBtn').addEventListener('click', searchPokemon);

function searchPokemon() {
    let userInput = document.getElementById('inputField').value;    
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
    .then(res => res.json())
    .then(result => {
        showData(result);
    });
}

function showData(serverData) {
    let nameHeader = document.getElementById("nameHeader");
    nameHeader.innerHTML = serverData.name;
    
    let sprite = document.getElementById("sprite");
    sprite.src = serverData.sprites.front_default;
}