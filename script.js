let dexNumber = 387;
const pokeImg = document.querySelector("#Pokemon");
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subBtn")

const fetchPromise = fetch( 
    "https://pokeapi.co/api/v2/pokemon/" + dexNumber, // using a variable to represent the Pokedex dexNumber
);
// Make sure to use pokemon and not pokemon-species

fetchPromise.then((response) => response.json()) 
// Converts the response from the server to usable data 
.then((data) => { 
    console.log(data);
    pokeImg.src = data.sprites.other["official-artwork"].front_default;
    //console.log(data.sprites);
})
.catch((err) => { // Only happens if there is a network error.
    console.log("NO PKMN");
})

function addDexNum(){ 
    dexNumber++;
    return fetch(
        "https://pokeapi.co/api/v2/pokemon/" + dexNumber,
        //start of a function to refetch a new Pokemon at another dex dexNumber.
    )
}

function subtractDexNum(){
    dexNumber--
    return fetch(
        "https://pokeapi.co/api/v2/pokemon/" + dexNumber,
    )
}

function addUpdate(){
    addDexNum().then((response) => response.json())
    .then((data) => {
        //console.log(data);
        pokeImg.src = data.sprites.other["official-artwork"].front_default;
    })  
}

function subUpdate(){
    subtractDexNum().then((response) => response.json())
    .then((data) => {
        console.log(data)
        pokeImg.src = data.sprites.other["official-artwork"].front_default;
    })
}

addBtn.addEventListener("click", addUpdate);
subtractBtn.addEventListener("click", subUpdate);

