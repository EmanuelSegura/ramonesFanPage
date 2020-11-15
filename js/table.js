document.addEventListener("DOMContentLoaded", tabla);

function tabla() {
    "use strict";

    //Datos 
    let tablaDatos = [{
        "nombre_artistico": "Joey Ramone",
        "nombre_original": "Jeffrey Hyman",
        "instrumento_vocal": "Voz líder",
        "periodo_banda": "(1974 – 1996)",
        "miembro_original": true
    }, {
        "nombre_artistico": "Johnny Ramone",
        "nombre_original": "John Cummings",
        "instrumento_vocal": "Guitarra",
        "periodo_banda": "(1974 – 1996)",
        "miembro_original": true
    }, {
        "nombre_artistico": "Dee Dee Ramone",
        "nombre_original": "Douglas Colvin",
        "instrumento_vocal": "Bajo - Voz secundaria",
        "periodo_banda": "(1974 – 1989)",
        "miembro_original": true
    }, {
        "nombre_artistico": "Tommy Ramone",
        "nombre_original": "Thomas Erdelyi",
        "instrumento_vocal": "Batería",
        "periodo_banda": "(1974 – 1978)",
        "miembro_original": true
    }, {
        "nombre_artistico": "Marky Ramone",
        "nombre_original": "Marc Bell",
        "instrumento_vocal": "Batería",
        "periodo_banda": "(1978 – 1983, 1987 – 1996)",
        "miembro_original": false
    }, {
        "nombre_artistico": "CJ Ramone",
        "nombre_original": "Christopher Joseph Ward",
        "instrumento_vocal": "Bajo - Voz secundaria",
        "periodo_banda": "(1989 – 1996)",
        "miembro_original": false
    }, {
        "nombre_artistico": "Richie Ramone",
        "nombre_original": "Richard Reinhardt",
        "instrumento_vocal": "Batería - Voz secundaria",
        "periodo_banda": "(1983 – 1987)",
        "miembro_original": false
    }, {
        "nombre_artistico": "Elvis Ramone",
        "nombre_original": "Clem Burke",
        "instrumento_vocal": "Batería",
        "periodo_banda": "(1987)",
        "miembro_original": false
    }];

    //la tabla del html en una variable
    let tabla = document.querySelector(".tablaDinamica");

    // Creo el objeto que ira manteniendo actualizada la tabla en el html como en el obj.
    let objetoTabla;

    // Carga los contenidos de la tabla por defecto al clickear el boton de cargar tabla
    function cargarTabla() {
        "use strict";

        // Cargo los datos por defecto que tengo en mi objeto js tablaDatos
        for (let i = 0; i < tablaDatos.length; i++) {
            let tr = document.createElement('tr');

            //Mantengo actualizado el objeto con los datos del json por defecto
            objetoTabla = tablaDatos[i];

            //Le agrego los hijos correspondientes al tag <tr>
            tr.appendChild(crearContenidoTabla(objetoTabla.nombre_artistico));
            tr.appendChild(crearContenidoTabla(objetoTabla.nombre_original));
            tr.appendChild(crearContenidoTabla(objetoTabla.instrumento_vocal));
            tr.appendChild(crearContenidoTabla(objetoTabla.periodo_banda));

            if (objetoTabla.miembro_original == true) {
                tr.setAttribute("class", "filaEspecialTabla");
            }

            //Anexo el tag <tr></tr> a la tabla del html 
            //(la cual tiene una clase anexada(tablaDinamica) al <tbody> como padre)
            tabla.appendChild(tr);
        }

        // console.log(tablaDatos);

    };

    // Crea el tag <td> con su respectivo contenido
    function crearContenidoTabla(contenido) {
        let td = document.createElement('td');
        td.innerHTML = contenido;
        return td;
    };


    //Agregar Fila
    //// Boton asignado para agregar fila
    let agregaFila = document.querySelector("#agregarFila");
    agregaFila.addEventListener('click', agregarFila);

    function agregarFila() {
        //toma el valor de los inputs y los pone en una variable
        let nombreArt = document.querySelector('#nombreArtistico').value;
        let nombreOrig = document.querySelector('#nombreOriginal').value;
        let instrum = document.querySelector('#instrumento').value;
        let periodo = document.querySelector('#periodo').value;

        // Añado al arreglo el obj. con datos agregados por el usuario. 
        tablaDatos.push({
            "nombre_artistico": nombreArt,
            "nombre_original": nombreOrig,
            "instrumento_vocal": instrum,
            "periodo_banda": periodo,
        });

        //Borro todo en la interfaz!
        tabla.innerHTML = "";
        //Cargo nuevamente la tabla, esta vez con el obj. nuevo de el usuario.
        //El objeto se actualiza en cargarTabla. 
        cargarTabla();
    };

    // Boton asignado para borrar tabla
    let borraTabla = document.querySelector("#borrarTabla");
    borraTabla.addEventListener('click', borrarTabla);

    // Borra la tabla, tanto de la interfaz como del arreglo.
    function borrarTabla() {
        // Borro el contenido de mi tabla del arreglo.
        tablaDatos = [];
        // Borro en la interfaz toda la tabla
        tabla.innerHTML = '';
        // console.log("vacio la tabla:");
        // console.log(tablaDatos);
    };

    //Carga al iniciar los integrantes de la banda como datos predeterminados
    cargarTabla();

    // Boton triple
    let btnTriple = document.querySelector("#tripleDatoTabla");
    btnTriple.addEventListener('click', botonTriple);

    function botonTriple() {
        for (let i = 0; i < 3; i++) {
            agregarFila();
        }
    }

};