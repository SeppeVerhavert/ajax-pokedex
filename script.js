document.getElementById('searchBtn').addEventListener('click', searchPokemon);

function searchPokemon() {
    let userInput = document.getElementById('inputField').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
        .then(res => res.json())
        .then(result => { showData(result); });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${userInput}/`)
        .then(res => res.json())
        .then(result => { showEvolution(result); });
}

function showData(serverData) {
    showName(serverData);
    showId(serverData);
    showSprite(serverData);
    showMoves(serverData);
}

function showName(serverData) {
    let nameHeader = document.getElementById("nameHeader");
    nameHeader.innerHTML = serverData.name;
}

function showId(serverData) {
    let idHeader = document.getElementById("idHeader");
    idHeader.innerHTML = serverData.id;
}

function showSprite(serverData) {
    let sprite = document.getElementById("sprite");
    sprite.src = serverData.sprites.front_default;
}

function showMoves(serverData) {
    let i = 0;
    let moveSet = [];

    for (i = 0; i != 4; i += 1) {
        moveSet.push(serverData.moves[i].move.name);
        document.getElementsByClassName("move")[i].innerHTML = moveSet[i];
    }
}

function showEvolution(serverData) {
    let evolution = document.getElementById("evolutionDiv");
    if (serverData.evolves_from_species == null) {
        evolution.innerHTML = "";
    } else {
        evolution.innerHTML = serverData.evolves_from_species.name;
    }
}