
function convertPokemonLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
<span class="number">#${pokemon.nunber}</span>
<span class="nome">${pokemon.name}</span>

<div class="detail">
    <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <img src="${pokemon.photo}" 
    alt="${pokemon.name}">

</div>
</li>`


}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemonst = []) => {
    const newhtml = pokemonst.map(convertPokemonLi).join('');

    pokemonList.innerHTML = newhtml;


})