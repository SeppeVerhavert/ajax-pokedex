
#  ajax-pokedex

Here I learn to use and combine AJAX, JSON and DOM.

## Learning Objectives


-   A typical AJAX flow: send asynchronous requests to a remote server and process the results;
-   **[JSON](https://www.w3schools.com/js/js_json_intro.asp)** (JavaScript Object Notation) format;
-   DOM manipulation: changing the DOM based on results of AJAX-requests.
  

##  Core Features

-   You can search a pokémon by name and by ID
-   Of said pokémon you need to show:
    -   The ID-number
    -   An image (sprite)
    -   _At least_ 4 "moves"
    -   The previous evolution, _only if it exists_, along with their name and image

## The Code

### Fetch data from the API
```javascript
function  searchPokemon()  {
let  userInput  =  document.getElementById('inputField').value;
fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
.then(res  =>  res.json())
.then(result  =>  {  showData(result);  });
 
fetch(`https://pokeapi.co/api/v2/pokemon-species/${userInput}/`)
.then(res  =>  res.json())
.then(result  =>  {  showEvolution(result);  });
}
```

### Show Data
```javascript
function  showName(serverData)  {
let  nameHeader  =  document.getElementById("nameHeader");
nameHeader.innerHTML  =  "pokémon name: <br>"  +  serverData.name;
}
```

### Show Moves
```javascript
function  showMoves(serverData)  {
let  i  =  0;
let  moveSet  = [];
for (i  =  0;  i  !=  4;  i  +=  1) {
moveSet.push(serverData.moves[i].move.name);
document.getElementsByClassName("move")[i].innerHTML  =  moveSet[i];}
}
```

### Show Evolution
```javascript
function  showEvolution(serverData)  {
let  evolution  =  document.getElementById("evolutionDiv");
if (serverData.evolves_from_species  ==  null) {
evolution.innerHTML  =  "evolves from: <br> none";
}  else  {
evolution.innerHTML  =  "evolves from: <br>"  +  serverData.evolves_from_species.name;}
}
```

##  Live Version

Catch the latest version [here](https://seppeverhavert.github.io/ajax-pokedex/).

##  Credits

API information on https://pokeapi.co/.
Background image found on [reddit](https://www.reddit.com/r/pokemon/comments/1gdlts/i_made_you_guys_a_background/) Posted by [u/Sandi315](https://www.reddit.com/user/Sandi315/).


