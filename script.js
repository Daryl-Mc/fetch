let dexNumber = 387;
const pokeImg = document.querySelector("#Pokemon");
const addBtn = document.querySelector("#addBtn");

const fetchPromise = fetch( 
    "https://pokeapi.co/api/v2/pokemon/" + dexNumber, // using a variable to represent the Pokedex dexNumber
);
// Make sure to use pokemon and not pokemon-species

fetchPromise.then((response) => response.json()) 
// Converts the response from the server to usable data 
.then((data) => { 
    console.log(data);
    pokeImg.src = data.sprites.front_default;
    //console.log(data.sprites);
})
.catch((err) => { // Only happens if there is a network error.
    console.log("NO PKMN");
})

function mathHandler(button){ 
// will handle whether the dexNumber goes up or down depending on its parameters.
}

function newPokemon(){ 
    dexNumber++;
    return fetch(
        "https://pokeapi.co/api/v2/pokemon/" + dexNumber,
        //start of a function to refetch a new Pokemon at another dex dexNumber.
    )
}

function imgUpdate(){
    newPokemon().then((response) => response.json())
    .then((data) => {
        //console.log(data);
        pokeImg.src = data.sprites.front_default;
    })  
}

addBtn.addEventListener("click", imgUpdate);


