const pokemonList = document.getElementById('pokemonList');

const loadMore = document.getElementById('loadMore');

const maxRecords = 151;
const limit = 8;
let offset = 0;



function loadPokemonItens(offset, limit) {




    pokeApi.getPokemons(offset, limit).then((pokemonst = []) => {
        const newhtml = pokemonst.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.nunber}</span>
    <span class="nome">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" 
        alt="${pokemon.name}">
    
    </div>
    </li>`)
    .join('')

        pokemonList.innerHTML = newhtml;


    })
}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit

    const qtdrecordnexpage = offset + limit;

    if (qtdrecordnexpage >= maxRecords) {

        const newlimite = maxRecords - offset
        loadPokemonItens(offset, newlimite);

        loadMore.parentElement.removeChild(loadMore);
    } else {

        loadPokemonItens(offset, limit)

    }
})