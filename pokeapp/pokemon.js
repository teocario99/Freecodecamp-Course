const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");

const pokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchData = async () => {
    try {
      const pokemonNameOrId = searchInput.value.toLowerCase();
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
      const data = await res.json();
      showPokemon(data);
    

    } catch (err) {
      alert("Pokémon not found")
      console.log(err)
    }
  };

  fetchData();


  const showPokemon = (data) => {
    
    const { name, id, weight, height, types, sprites, stats } = data;
    
    
    
    pokemonName.textContent = `${name.toUpperCase()}`;
    pokemonId.textContent = `#${id}`;
    pokemonWeight.textContent = ` Weight: ${weight}`;
    pokemonHeight.textContent = `Height: ${height}`;
    spriteContainer.innerHTML = `<img src= "${sprites.front_default}" alt="${name}" id="sprite">`;
    hp.textContent = `${stats[0].base_stat}`;
    attack.textContent = `${stats[1].base_stat}`;
    defense.textContent = `${stats[2].base_stat}`;
    specialAttack.textContent = `${stats[3].base_stat}`;
    specialDefense.textContent = `${stats[4].base_stat}`;
    speed.textContent = `${stats[5].base_stat}`;
    pokemonTypes.innerHTML = types.map((types) => `<span>${types.type.name.toUpperCase()}</span>`) 
  };



  searchBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  fetchData();
  });


  searchInput.addEventListener("keydown", (event)=> {
    if (event.key === "Enter"){
      searchBtn.click();
    };

  })
