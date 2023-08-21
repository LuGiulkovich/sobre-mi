/** Obtencion del nombre ingresado por el jugador. */
const nombreJugador = document.getElementById('juego__interfaz-input-nombre').value;

/** Funcion para reiniciar la partida. */
function reiniciarPartida() {
    document.getElementById('juego').reset();
}

/** Funcion para validar que el nombre ingresado por
 * parte del usuario no esté vacio.
 */
function campoVacio() {
    if (nombreJugador === '') {
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio-activado');
    } else {
        document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
    }
}
