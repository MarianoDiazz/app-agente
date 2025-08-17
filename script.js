document.getElementById("btn").addEventListener("click", mostrarPersonaje);

function mostrarPersonaje() {
    const nombre = document.getElementById("nombre").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");

    // 🔹 Diccionario de personajes (fácil de ampliar)
    const personajes = {
        "ezequiel": { nombre: "Agente P 🦘💧🕵️‍♂️", img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png" },
        "matias": { nombre: "Ferb Fletcher", img: "https://i.pinimg.com/736x/96/46/51/964651c210712b9848d254e210fc85e4.jpg" },
        "chiqui": { nombre: "Pinky el Chihuahua", img: "https://i.pinimg.com/736x/0e/ee/a5/0eeea5f88d1c381ac0e056bfa58b47ca.jpg" },
        // "sofia": { nombre: "Candace Flynn", img: "https://i.pinimg.com/236x/c4/70/b7/c470b78f646798ae0a99a31f0a8a9ab1.jpg" },
        "mariano": { nombre: "eee", img: "https://i.pinimg.com/1200x/45/1d/f0/451df0d3770fe2301d10c811b29f066e.jpg" },
        "tarro": { nombre: "Isabella Garcia-Shapiro", img: "https://static.wikia.nocookie.net/disney/images/7/74/Newton%C3%91u.png/revision/latest?cb=20120827081719&path-prefix=es" },
        "facundo": { nombre: "...", img: "https://i.pinimg.com/736x/9f/28/9d/9f289d27286afc68d4612e0b252577d4.jpg" },
        "mati": { nombre: "Ferb de tussi", img: "https://i.pinimg.com/1200x/41/d7/f1/41d7f18ddb2dec362581c5a5302902b8.jpg" },
        "gabriel": { nombre: "Agente Chajá", img: "https://i.pinimg.com/736x/e4/cf/e4/e4cfe4f6089a607074578225b2c9f324.jpg" },
        "eduardo": { nombre: "...", img: "https://i.pinimg.com/736x/1e/54/40/1e5440bbb804c55c08f256c9b858ca44.jpg" },
        "marcos": { nombre: "...", img: "https://m.media-amazon.com/images/S/pv-target-images/0ddf85ffe1548e68142ef09f17bfe0c5450ca019e100bef1c59f762d3aa4e62d.jpg" },
    };

    if (personajes[nombre]) {
        // Si el nombre está en la lista
        resultado.innerHTML = `
            Eres <br>${personajes[nombre].nombre}!<br>
            <img src="${personajes[nombre].img}" alt="${personajes[nombre].nombre}">
        `;
    } else {
        // Si no está → elegimos uno random de la lista
        const listaPersonajes = Object.values(personajes);
        const randomIndex = Math.floor(Math.random() * listaPersonajes.length);
        const personajeRandom = listaPersonajes[randomIndex];

        resultado.innerHTML = `
            No estabas en la lista, pero... <br>
            Eres ${personajeRandom.nombre}!<br>
            <img src="${personajeRandom.img}" alt="${personajeRandom.nombre}">
        `;
    }
}
