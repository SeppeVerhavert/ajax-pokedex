document.getElementById("searchBtn").addEventListener('click', getData);
let userInput;

function getData() {
    getUserInput();
    fetchData();
}

function getUserInput() {
    userInput = document.getElementById('inputField').value;
}

function fetchData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
    .then(res => res.json())
    .then(result => {showData(result); });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${userInput}/`)
        .then(res => res.json())
        .then(result => { showEvolution(result); });
}

function showData(serverData) {
    let nameHeader = document.getElementById("nameHeader");
    nameHeader.innerHTML = "pokémon name: <br>" + serverData.name;
    
    let idHeader = document.getElementById("idHeader");
    idHeader.innerHTML = "pokémon id: <br>" + serverData.id;

    let weightPoke = document.getElementById("weightPoke");
    weightPoke.innerHTML = "pokémon weight: <br>"  + serverData.weight/10 + " kg";

    sprite.src = serverData.sprites.front_default;

    let moveSet = [];
    for (i = 0; i != 4; i += 1) {
        moveSet.push(serverData.moves[i].move.name);
        document.getElementsByClassName("move")[i].innerHTML = moveSet[i];
    }
}

function showEvolution(serverData) {
    let evolution = document.getElementById("evolutionDiv");
    if (serverData.evolves_from_species == null) {
        evolution.innerHTML = "no evolution found";
    } else {
        evolution.innerHTML = "evolves from: <br>" + serverData.evolves_from_species.name;
    }
}