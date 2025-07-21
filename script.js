function trocarcharmander(){
    document.getElementById("pokemon-name").innerText = "Charmander";
    document.getElementById("pokemon-img").src = "https://img.pokemondb.net/artwork/large/charmander.jpg";
    document.getElementById("pokemon-type").innerText = "Tipo: Fogo";
    document.getElementById("attacks-list").innerHTML = "<li>Chama</li><li>Arranhão</li><li>Golpe de Cauda</li>";
}

function trocarSquirtle(){
    document.getElementById("pokemon-name").innerHTML = "Squirtle";
    document.getElementById("pokemon-img").src = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png";
    document.getElementById("pokemon-type").innerHTML = "Tipo: Água";
    document.getElementById("attacks-list").innerHTML = "<li>Jato d'Água</li><li>Investida</li><li>Giro Rápido</li>";
}
function Home() {
    window.location.href = 'index.html';
}