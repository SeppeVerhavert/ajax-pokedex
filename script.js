document.getElementById('searchBtn').addEventListener('click', searchPokemon);
document.getElementById('nextBtn').addEventListener('click', nextPokemon);
document.getElementById('shinyBtn').addEventListener('click', shinySprite);
document.getElementById('previousBtn').addEventListener('click', previousPokemon);
let storedId = 0;
let userInput;
let shinyPokemon = false;

function searchPokemon() {
    getUserInput();
    fetchData();
}

function getUserInput() {
    userInput = document.getElementById('inputField').value;
}

function fetchData() {
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
    storeId(serverData);
    showTypes(serverData);
    showSprite(serverData);
    showMoves(serverData);
}

function showName(serverData) {
    let nameHeader = document.getElementById("nameHeader");
    nameHeader.innerHTML = "pokémon name: <br>" + serverData.name;
}

function showId(serverData) {
    let idHeader = document.getElementById("idHeader");
    idHeader.innerHTML = "pokémon id: <br>" + serverData.id;
}

function storeId(serverData) {
    storedId = serverData.id;
}

function showTypes(serverData) {
    let typesHeader = document.getElementById("typesHeader");
    if (serverData.types.length === 2) {
        typesHeader.innerHTML = "pokémon types: <br>" + serverData.types[1].type.name + " ," + serverData.types[0].type.name;
    } else if (serverData.types.length === 1) {
        typesHeader.innerHTML = "pokémon types: <br>" + serverData.types[0].type.name
    }
}

function showSprite(serverData) {
    if (shinyPokemon) {
        sprite.src = serverData.sprites.front_shiny;
    } else {
        sprite.src = serverData.sprites.front_default;
    }
}

function showMoves(serverData) {
    let moveSet = [];

    for (i = 0; i != 4; i += 1) {
        let j = (i * 6) + 3;
        moveSet.push(serverData.moves[j].move.name);
        document.getElementsByClassName("move")[i].innerHTML = moveSet[i];
    }
}

function showEvolution(serverData) {
    let evolution = document.getElementById("evolutionDiv");
    if (serverData.evolves_from_species == null) {
        evolution.innerHTML = "evolves from: <br> none";
    } else {
        evolution.innerHTML = "evolves from: <br>" + serverData.evolves_from_species.name;
    }
}

function nextPokemon() {
    if (storedId != 0) {
        userInput = storedId += 1;
    }
    fetchData();
}

function previousPokemon() {
    if (storedId != 0) {
        userInput = storedId -= 1;
    }
    fetchData();
}

function shinySprite() {
    if (shinyPokemon) {
        document.getElementById("shinyBtn").style.background="rgb(115, 224, 219)"
        shinyPokemon = false;
    } else {
        document.getElementById("shinyBtn").style.background="rgb(220, 223, 49)"
        shinyPokemon = true;
    }
}

