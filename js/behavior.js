"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    "use strict";

    // Navbar
    let btnBurger = document.querySelector(".btn_menu");

    btnBurger.addEventListener("click", toggleMenu);

    function toggleMenu() {
        document.querySelector(".botonera").classList.toggle("show");
    }

});

// Tabla json

// let tabla = [{
//     "nombre_artistico": "Joey Ramone",
//     "nombre_original": "Jeffrey Hyman",
//     "instrumento_vocal": "Voz líder",
//     "periodo_banda": "(1974– 1996)"
// }, {
//     "nombre_artistico": "Johnny Ramone",
//     "nombre_original": "John Cummings",
//     "instrumento_vocal": "Guitarra",
//     "periodo_banda": "(1974– 1996)"
// }, {
//     "nombre_artistico": "Dee Dee Ramone",
//     "nombre_original": "Douglas Colvin",
//     "instrumento_vocal": "Bajo - Voz secundaria",
//     "periodo_banda": "(1974– 1989)"
// }, {
//     "nombre_artistico": "Tommy Ramone",
//     "nombre_original": "Thomas Erdelyi",
//     "instrumento_vocal": "Batería",
//     "periodo_banda": "(1974– 1978)"
// }, {
//     "nombre_artistico": "Marky Ramone",
//     "nombre_original": "Marc Bell",
//     "instrumento_vocal": "Batería",
//     "periodo_banda": "(1978– 1983, 1987– 1996)"
// }, {
//     "nombre_artistico": "CJ Ramone",
//     "nombre_original": "Christopher Joseph Ward",
//     "instrumento_vocal": "Bajo - Voz secundaria",
//     "periodo_banda": "(1989– 1996)"
// }, {
//     "nombre_artistico": "Richie Ramone",
//     "nombre_original": "Richard Reinhardt",
//     "instrumento_vocal": "Batería - Voz secundaria",
//     "periodo_banda": "(1983– 1987)"
// }, {
//     "nombre_artistico": "Elvis Ramone",
//     "nombre_original": "Clem Burke",
//     "instrumento_vocal": "Batería",
//     "periodo_banda": "(1987)"
// }];

// console.log(tabla);
// console.log(tabla[0].instrumento_vocal);