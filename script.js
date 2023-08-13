let dexNumber = 1;
const pokeImg = document.querySelector("#Pokemon");
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subBtn")

const fetchPromise = fetch( 
    "https://pokeapi.co/api/v2/pokemon/" + dexNumber, // using a variable to represent the Pokedex dexNumber
);

fetchPromise.then((response) => response.json()) 
//  response.json() Converts the response from the server to usable data 
.then((data) => { 
    console.log(data);
    pokeImg.src = data.sprites.other["official-artwork"].front_default;
})
.catch((err) => { // Only happens if there is a network error.
    console.log("NO PKMN");
})

function zeroCheck(){
    if(dexNumber == 1){
        subtractBtn.disabled = true;
    } if(dexNumber > 1){
        subtractBtn.disabled = false;
    }
}

function addDexNum(){ 
    dexNumber++;
    zeroCheck();
    return fetch(
        "https://pokeapi.co/api/v2/pokemon/" + dexNumber,
        //start of a function to refetch a new Pokemon at another dex dexNumber.
    )
}

function subtractDexNum(){
    dexNumber--;
    zeroCheck();
    return fetch(
        "https://pokeapi.co/api/v2/pokemon/" + dexNumber,
    )
}

function addUpdate(){
    addDexNum().then((response) => response.json())
    .then((data) => {
        pokeImg.src = data.sprites.other["official-artwork"].front_default;
    })  
}

function subUpdate(){
    subtractDexNum().then((response) => response.json())
    .then((data) => {
        pokeImg.src = data.sprites.other["official-artwork"].front_default;
    })
}


addBtn.addEventListener("click", addUpdate);
subtractBtn.addEventListener("click", subUpdate);

