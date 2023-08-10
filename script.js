let number = 1;
const pokeImg = document.querySelector("#Pokemon");
const addBtn = document.querySelector("#addBtn");

const fetchPromise = fetch( 
    "https://pokeapi.co/api/v2/pokemon/" + number, // using a variable to represent the Pokedex number
);
// Make sure to use pokemon and not pokemon-species

fetchPromise.then((response) => response.json()) 
// Converts the response from the server to usable data 
.then((data) => { 
    console.log(data);
    pokeImg.src = data.sprites.front_default;
    console.log(data.sprites);
})
.catch((err) => { // Only happens if there is a network error.
    console.log("NO PKMN");
})

function newPokemon(){
    number ++
    return fetch(
        "https://pokeapi.co/api/v2/pokemon/" + number,
        //start of a function to refetch a new Pokemon at another dex number.
    )
}

function imgUpdate(){
    newPokemon().then((response) => response.json())
    .then((data) => {
        console.log(data);
        pokeImg.src = data.sprites.front_default;
    })  
}

addBtn.addEventListener("click", imgUpdate);


