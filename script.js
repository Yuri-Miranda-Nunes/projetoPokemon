// Criar partículas flutuantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Função para atualizar o card com animação
function updateCard(pokemon) {
    const card = document.getElementById('pokemon-card');
    const cardInner = card.querySelector('.card-inner');
    const pokemonInfo = document.getElementById('pokemon-info');
    const attacksList = document.getElementById("attacks-list");
    
    // Animação de saída
    cardInner.style.transform = 'rotateY(90deg) scale(0.8)';
    cardInner.style.opacity = '0.7';
    
    // Animar saída dos ataques
    const currentAttacks = attacksList.querySelectorAll('li');
    currentAttacks.forEach((attack, index) => {
        setTimeout(() => {
            attack.style.transform = 'translateX(-100px)';
            attack.style.opacity = '0';
        }, index * 50);
    });
    
    setTimeout(() => {
        // Atualizar conteúdo
        document.getElementById("pokemon-name").innerText = pokemon.name;
        document.getElementById("pokemon-img").src = pokemon.image;
        document.getElementById("pokemon-type").innerText = pokemon.type;
        
        // Atualizar ataques com animação
        attacksList.innerHTML = pokemon.attacks.map(attack => `<li style="transform: translateX(100px); opacity: 0;">${attack}</li>`).join('');
        
        // Atualizar cor de fundo
        pokemonInfo.className = `pokemon-info ${pokemon.class}`;
        
        // Animação de entrada do card
        cardInner.style.transform = 'rotateY(0deg) scale(1)';
        cardInner.style.opacity = '1';
        
        // Animar entrada dos novos ataques
        const newAttacks = attacksList.querySelectorAll('li');
        newAttacks.forEach((attack, index) => {
            setTimeout(() => {
                attack.style.transform = 'translateX(0)';
                attack.style.opacity = '1';
                attack.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }, 200 + (index * 100));
        });
    }, 500);
}

// Dados dos pokémons
const pokemonData = {
    pikachu: {
        name: "Pikachu",
        image: "https://unite.pokemon.com/images/pokemon/pikachu/stat/stat-pikachu.png",
        type: "Tipo: Elétrico",
        attacks: ["Choque do Trovão", "Ataque Rápido", "Investida Elétrica"],
        class: "type-electric"
    },
    charmander: {
        name: "Charmander",
        image: "https://www.nicepng.com/png/full/337-3370774_charmander-by-mighty-on-deviantart-pokemon-charmander.png",
        type: "Tipo: Fogo",
        attacks: ["Lança-chamas", "Garra de Fogo", "Investida"],
        class: "type-fire"
    },
    squirtle: {
        name: "Squirtle",
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        type: "Tipo: Água",
        attacks: ["Jato d'Água", "Bolhas", "Cauda de Água"],
        class: "type-water"
    }
};

// Funções de seleção
function selectPikachu() {
    updateCard(pokemonData.pikachu);
}

function selectCharmander() {
    updateCard(pokemonData.charmander);
}

function selectSquirtle() {
    updateCard(pokemonData.squirtle);
}

// Inicializar partículas quando a página carregar
window.addEventListener('load', createParticles);

// Efeito de mouse seguindo o card
document.getElementById('pokemon-card').addEventListener('mousemove', (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.querySelector('.card-inner').style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

document.getElementById('pokemon-card').addEventListener('mouseleave', (e) => {
    e.currentTarget.querySelector('.card-inner').style.transform = 
        'rotateX(0deg) rotateY(0deg) scale(1)';
});