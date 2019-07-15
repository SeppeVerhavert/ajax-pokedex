document.getElementById('searchBtn').addEventListener('click', searchPokemon);

function searchPokemon() {
    let userInput = document.getElementById('inputField').value;    
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
    .then(res => res.json())
    .then(data => console.log(data));
}
