const fetchPromise = fetch( 
    "https://pokeapi.co/api/v2/pokemon/dragonite",
);
console.log(fetchPromise);

fetchPromise.then((response) => response.json()) 
// Converts the response from the server to usable data 
.then((data) => { 
    const pokeImg = document.querySelector("#Pokemon")
    console.log(data);
    pokeImg.src = data.sprites.front_default;
    console.log(data.sprites);
})
.catch((err) => { 
    console.log("NO PKMN")
})
