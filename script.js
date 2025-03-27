document.addEventListener("DOMContentLoaded", function () {
    const numPetalas = 15; // Número de pétalas na tela
    const container = document.body;

    for (let i = 0; i < numPetalas; i++) {
        let petala = document.createElement("div");
        petala.classList.add("petala");
        petala.style.left = `${Math.random() * 100}vw`;
        petala.style.animationDuration = `${Math.random() * 3 + 2}s`; // Velocidade aleatória
        petala.style.animationDelay = `${Math.random() * 5}s`; // Tempo de início aleatório
        container.appendChild(petala);
    }
});
