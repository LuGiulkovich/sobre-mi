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
        console.log('hola')
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio-activado');
    } else {
        console.log('cualquiera');
        document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
    }
}

/** Validacion de campo vacio al tocar tecla */
nombreJugador.addEventListener('keyup', campoVacio);

/** Funcion para seleccionar una de las opciones
 * Piedra, Papel o Tijeras. */
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijeras = document.getElementById('tijeras');

let pikachuYoTeEligo = '';

piedra.addEventListener('click', () => {
    document.getElementById('piedra').classList.add('juego__btn-activa');
    document.getElementById('piedra').classList.remove('juego__btn');
    document.getElementById('papel').classList.remove('juego__btn-activa');
    document.getElementById('papel').classList.add('juego__btn');
    document.getElementById('tijeras').classList.remove('juego__btn-activa');
    document.getElementById('tijeras').classList.add('juego__btn');
    pikachuYoTeEligo = "piedra";
    console.log(pikachuYoTeEligo);
});

papel.addEventListener('click', () => {
    document.getElementById('papel').classList.add('juego__btn-activa');
    document.getElementById('papel').classList.remove('juego__btn');
    document.getElementById('piedra').classList.remove('juego__btn-activa');
    document.getElementById('piedra').classList.add('juego__btn');
    document.getElementById('tijeras').classList.remove('juego__btn-activa');
    document.getElementById('tijeras').classList.add('juego__btn');
    pikachuYoTeEligo = "papel";
    console.log(pikachuYoTeEligo);
});

tijeras.addEventListener('click', () => {
    document.getElementById('tijeras').classList.add('juego__btn-activa');
    document.getElementById('tijeras').classList.remove('juego__btn');
    document.getElementById('piedra').classList.remove('juego__btn-activa');
    document.getElementById('piedra').classList.add('juego__btn');
    document.getElementById('papel').classList.remove('juego__btn-activa');
    document.getElementById('papel').classList.add('juego__btn');
    pikachuYoTeEligo = "tijeras";
    console.log(pikachuYoTeEligo);
});

/** Funcion para obtener una jugada aleatoria de la computadora */
function jugadaPC() {
    /** Aca con Math.random establezco que mis numeros aleatorios sean 0, 1 o 2 */
    let numero = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    console.log(numero);
}

/** Guardo al boton Jugar en una variable */
const pc = document.getElementById('juego__btn-jugar');

/** Para darle el evento click y obtener la jugada de la PC */
pc.addEventListener('click', jugadaPC);
