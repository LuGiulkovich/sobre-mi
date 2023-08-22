/** Obtencion del nombre ingresado por el jugador. */
const nombreJugador = document.getElementById('juego__interfaz-input-nombre');

/** Funcion para reiniciar la partida. */
function reiniciarPartida() {
    document.getElementById('juego').reset();
}

/** Funcion para validar que el nombre ingresado por
 * parte del usuario no esté vacio. */
function campoVacio() {
    const nombre = nombreJugador.value;

    if (nombre === '') {
        console.log('campo vacio');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio-activado');
    } else {
        console.log("El jugador es " + nombre);
        document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
        document.getElementById('nombreUsuario').innerHTML = nombre;
    }
}

/** Validacion de campo vacio al tocar tecla. */
nombreJugador.addEventListener('keyup', campoVacio);

/** Funcion para seleccionar una de las opciones
 * Piedra, Papel o Tijeras. */
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijeras = document.getElementById('tijeras');

/** Declaro esta variable para obtener un valor para usar en el juego. */

let pikachuYoTeEligo;

piedra.addEventListener('click', () => {
    document.getElementById('piedra').classList.add('juego__btn-activa');
    document.getElementById('piedra').classList.remove('juego__btn');
    document.getElementById('papel').classList.remove('juego__btn-activa');
    document.getElementById('papel').classList.add('juego__btn');
    document.getElementById('tijeras').classList.remove('juego__btn-activa');
    document.getElementById('tijeras').classList.add('juego__btn');
    pikachuYoTeEligo = "Piedra";
    console.log("Eligió " + pikachuYoTeEligo);
    document.getElementById('eleccionUsuario').innerHTML = pikachuYoTeEligo;
});

papel.addEventListener('click', () => {
    document.getElementById('papel').classList.add('juego__btn-activa');
    document.getElementById('papel').classList.remove('juego__btn');
    document.getElementById('piedra').classList.remove('juego__btn-activa');
    document.getElementById('piedra').classList.add('juego__btn');
    document.getElementById('tijeras').classList.remove('juego__btn-activa');
    document.getElementById('tijeras').classList.add('juego__btn');
    pikachuYoTeEligo = "Papel";
    console.log("Eligió " + pikachuYoTeEligo);
    document.getElementById('eleccionUsuario').innerHTML = pikachuYoTeEligo;
});

tijeras.addEventListener('click', () => {
    document.getElementById('tijeras').classList.add('juego__btn-activa');
    document.getElementById('tijeras').classList.remove('juego__btn');
    document.getElementById('piedra').classList.remove('juego__btn-activa');
    document.getElementById('piedra').classList.add('juego__btn');
    document.getElementById('papel').classList.remove('juego__btn-activa');
    document.getElementById('papel').classList.add('juego__btn');
    pikachuYoTeEligo = "Tijeras";
    console.log("Eligió " + pikachuYoTeEligo);
    document.getElementById('eleccionUsuario').innerHTML = pikachuYoTeEligo;
});

/** Guardo en una variable el boton Jugar. */
let pc = document.getElementById('juego__btn-jugar');

/** Le doy el evento click con la funcion Jugar para que me ejecute la partida. */
pc.addEventListener('click', jugar);

/** Acá declaro las variables para contar los puntos tanto de la PC como el Usuario */
let puntosPC = 0;
let puntosUsuario = 0;

/** Agrego contador de empates. */
let empates = 0;

/** Llamo al span que tiene los empates. */
let txtEmpates = document.getElementById('empates');

/** Agrego el nomnbre del usuario en el puntuador. */
let usuarioNombre = document.getElementById('nombreUsuarioPunto');

/** Llamo los parrafos que van a contener los puntajes. */
let txtPuntoPC = document.getElementById('puntoPC');
let txtPuntoUsuario = document.getElementById('puntoUsuario');

/** Declaro una variable para contar las rondas. */
let numeroRonda = 0;

/** LLamo a las rondas. */
let txtRondas = document.getElementById('numeroRonda');

/** Funcion para jugar. */
function jugar() {
    /** Hago que aprezca la interfaz de partidas. */
    document.getElementById('juego__partidas-costado').classList.add('juego__partidas-costado-activa');
    /** Guardo el valor del nombre de Usuario. */
    const nombreGuardado = nombreJugador.value;

    /** Agrego el contador de las rondas. */
    txtRondas.textContent = numeroRonda;

    /** Decaro una variable para guardar el numero aleatorio de la PC*/
    let numeroPC;

    /** Aca con Math.random establezco que mis numeros aleatorios sean 0, 1 o 2. */
    numeroPC = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    /** Luego declaro una variable para contener un string que me diga la opcion. */
    let eleccionPC;

    if (numeroPC === 0) {
        eleccionPC = "Piedra";
    } else if (numeroPC === 1) {
        eleccionPC = "Papel";
    } else if (numeroPC === 2) {
        eleccionPC = "Tijeras"
    }
    console.log("La PC eligió " + eleccionPC);
    document.getElementById('eleccionPC').innerHTML = eleccionPC;

    /** Código para determinar el ganador entre el usuario y la PC. */
    if (pikachuYoTeEligo == "Piedra") {
        if (eleccionPC == "Piedra") {
            document.getElementById('ganador').innerHTML = 'Ninguno, empate';
            empates += 1;
        } else if (eleccionPC == "Papel") {
            document.getElementById('ganador').innerHTML = 'PC';
            puntosPC += 1;
        } else if (eleccionPC == "Tijeras") {
            document.getElementById('ganador').innerHTML = nombreGuardado;
            puntosUsuario += 1;
        }
    } else if (pikachuYoTeEligo == "Papel") {
        if (eleccionPC == "Piedra") {
            document.getElementById('ganador').innerHTML = nombreGuardado;
            puntosUsuario += 1;
        } else if (eleccionPC == "Papel") {
            document.getElementById('ganador').innerHTML = 'Ninguno, empate';
            empates += 1;
        } else if (eleccionPC == "Tijeras") {
            document.getElementById('ganador').innerHTML = 'PC';
            puntosPC += 1;
        }
    } else if (pikachuYoTeEligo == "Tijeras") {
        if (eleccionPC == "Piedra") {
            document.getElementById('ganador').innerHTML = 'PC';
            puntosPC += 1;
        } else if (eleccionPC == "Papel") {
            document.getElementById('ganador').innerHTML = nombreGuardado;
            puntosUsuario += 1;
        } else if (eleccionPC == "Tijeras") {
            document.getElementById('ganador').innerHTML = 'Ninguno, empate';
            empates += 1;
        }
        
    }
    /** Sumo la cantidad de rondas. */
    numeroRonda += 1;

    /** Agrego el nombre del usuario al puntuador. */
    usuarioNombre.textContent = nombreGuardado;

    /** Agrego en el HTML el puntaje correspondiente. */
    txtPuntoPC.textContent = puntosPC;
    txtPuntoUsuario.textContent = puntosUsuario;

    

    /** Agrego la cantidad de empates. */
    txtEmpates.textContent = empates;
}
