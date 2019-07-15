document.getElementById('searchBtn').addEventListener('click', searchPokemon);

function searchPokemon() {
    let userInput = document.getElementById('inputField').value;
    console.log(userInput);
    
    fetch(`https://pokeapi.co/api/v2/${userInput}/`)
    .then(res => res.json())
    .then(data => console.log(data));
}
