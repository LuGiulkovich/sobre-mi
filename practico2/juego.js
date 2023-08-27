/** Obtencion del nombre ingresado por el jugador. */
const nombreJugador = document.getElementById('juego__interfaz-input-nombre');
/** Funcion para seleccionar una de las opciones Piedra, Papel o Tijeras. */
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijeras = document.getElementById('tijeras');
/** Declaro esta variable para obtener un valor para usar en el juego. */
let pikachuYoTeEligo;
/** Guardo en una variable el boton Jugar. */
let pc = document.getElementById('juego__btn-jugar');
/** Acá declaro las variables para contar los puntos tanto de la PC como el Usuario. */
let puntosPC = 0;
let puntosUsuario = 0;
/** Agrego contador de empates. */
let empates = 0;
/** Llamo al span que tiene los empates. */
let txtEmpates = document.getElementById('empates');
/** Agrego el nombre del usuario en el puntuador. */
let usuarioNombre = document.getElementById('nombreUsuarioPunto');
/** Llamo los parrafos que van a contener los puntajes. */
let txtPuntoPC = document.getElementById('puntoPC');
let txtPuntoUsuario = document.getElementById('puntoUsuario');
/** Declaro una variable para contar las rondas. */
let numeroRonda = 1;
/** LLamo a las rondas. */
let txtRondas = document.getElementById('numeroRonda');
/** LLamo al parrafo que va a contener al ganador. */
let ganador = document.getElementById('ganador-ganador');
/** LLamo al parrafo que tiene el nombre de usuario en las estadisticas. */
let usuarioEstadisticas = document.getElementById('nombreUsuario');



/** Funcion para validar que el nombre ingresado por parte del usuario no esté vacio. */
function campoVacio() {
    /** Guardo en una variable el valor del nombre del jugador. */
    const nombre = nombreJugador.value;
    /** Si el nombre está vacío... */
    if (nombre === '') {
        /** Le muestro por pantalla al usuario el mensaje de nombre vacío. */
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio-activado');
    } else {
        /** Sino le quito el mensaje si es que anteriormente ya se habia mostrado. */
        document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
        /** Agrego el nombre del usuario en las estadisticas. */
        usuarioEstadisticas.textContent = nombre;
        /** Una vez agregado el nombre al jugar desabilito el imput. 
        nombreJugador.disabled = true;*/
    }
}
/** Validacion de campo vacio al tocar tecla. */
nombreJugador.addEventListener('keyup', campoVacio);

/** Agrego estilos a las imagenes de Piedra, Papel y Tijeras. */
piedra.addEventListener('click', () => {
    /** Agrego estilo a la opción elegida. */
    document.getElementById('piedra').classList.add('juego__btn-activa');
    /** Le quito la clase que le da el color verde y transition. */
    document.getElementById('piedra').classList.remove('juego__btn');
    /** Quito los estilos de los demas botones si ya fueron seleccionados antes. */
    document.getElementById('papel').classList.remove('juego__btn-activa');
    document.getElementById('papel').classList.add('juego__btn');
    document.getElementById('tijeras').classList.remove('juego__btn-activa');
    document.getElementById('tijeras').classList.add('juego__btn');
    /** A la opcion que elegí la guardo en la variable que representa al usuario. */
    pikachuYoTeEligo = "Piedra";
    /** Agrego la opcion elegida en las estadisticas. */
    document.getElementById('eleccionUsuario').innerHTML = pikachuYoTeEligo;
});
/** Y así sucesivamente. */
papel.addEventListener('click', () => {
    document.getElementById('papel').classList.add('juego__btn-activa');
    document.getElementById('papel').classList.remove('juego__btn');
    document.getElementById('piedra').classList.remove('juego__btn-activa');
    document.getElementById('piedra').classList.add('juego__btn');
    document.getElementById('tijeras').classList.remove('juego__btn-activa');
    document.getElementById('tijeras').classList.add('juego__btn');
    pikachuYoTeEligo = "Papel";
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
    document.getElementById('eleccionUsuario').innerHTML = pikachuYoTeEligo;
});
/** Le doy el evento click al boton comenzar con la funcion Jugar para que me ejecute la partida. */
pc.addEventListener('click', jugar);



/** Funcion para jugar. */
function jugar() {
    /** Guardo el valor del nombre de Usuario. */
    const nombreGuardado = nombreJugador.value;

    /** Agrego validación para que sin un nombre no continúe el juego... */
    if (nombreGuardado === undefined || nombreGuardado === '') {
        /** ...y le permita al usuario agregar un nombre antes de empezar a jugar. */
        return;
    } 

    /** Agrego validación para que la opción del jugador no sea vacía. */
    if (pikachuYoTeEligo !== "Piedra" && pikachuYoTeEligo !== "Papel" && pikachuYoTeEligo !== "Tijeras") {
        document.getElementById('juego__mensaje-sin-opcion').classList.add('juego__mensaje-vacio-activado');
        return;
    } else {
        document.getElementById('juego__mensaje-sin-opcion').classList.remove('juego__mensaje-vacio-activado');
    }
    
    /** Le cambio el nombre al boton Comenzar por Jugar. */
    document.getElementById('juego__btn-jugar').textContent = "Jugar";

    /** Hago que aprezca la interfaz de partidas. */
    document.getElementById('juego__partidas-costado').classList.add('juego__partidas-costado-activa');

    /** Agrego el contador de las rondas. */
    txtRondas.textContent = numeroRonda;

    /** Decaro una variable para guardar el numero aleatorio de la PC. */
    let numeroPC;

    /** Aca con Math.random establezco que mis numeros aleatorios sean 0, 1 o 2. */
    numeroPC = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    /** Luego declaro una variable para contener un string que me diga la opcion. */
    let eleccionPC;

    /** Código para obtener como Opcion elegida por la PC dependiendo del Math.random(). */
    if (numeroPC === 0) {
        eleccionPC = "Piedra";
    } else if (numeroPC === 1) {
        eleccionPC = "Papel";
    } else if (numeroPC === 2) {
        eleccionPC = "Tijeras"
    }
    document.getElementById('eleccionPC').innerHTML = eleccionPC;

    /** Código para determinar el ganador entre el usuario y la PC. */
    /** Si yo elijo Piedra... */
    if (pikachuYoTeEligo == "Piedra") {
        /** y la PC Piedra... */
        if (eleccionPC == "Piedra") {
            /** agrego empate al marcador... */
            document.getElementById('ganador').innerHTML = 'Empate';
            /** y le sumo al contador de empate. */
            empates += 1;
            /** Y así respectivamente. */
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
            document.getElementById('ganador').innerHTML = 'Empate';
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
            document.getElementById('ganador').innerHTML = 'Empate';
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

    /** Condiciones del Ganador. */
    if (puntosPC == 3) {
        /** Agrego al mensaje de ganador la PC. */
        ganador.textContent = "Ganador: PC";
        /** Muestro el mensaje del ganador. */
        document.getElementById('mensaje__ganador-tapando').classList.add('mensaje__ganador-tapando-apareciendo');
        /** Quito el juego de pantalla. */
        document.getElementById('sacar').classList.add('sacar-juego');
    } else if (puntosUsuario == 3) {
        /** Agrego al mensaje de ganador el nombre del Usuario. */
        ganador.textContent = "Ganador: " + nombreGuardado;
        document.getElementById('mensaje__ganador-tapando').classList.add('mensaje__ganador-tapando-apareciendo');
        document.getElementById('sacar').classList.add('sacar-juego');
    }
}



/** Funcion para reiniciar la partida. */
function reiniciarPartida() {
    /** Al div que contiene el juego le remuevo el estilo display: none; y me muestra todo el juego de nuevo. */
    document.getElementById('sacar').classList.remove('sacar-juego');
    /** Al div que contiene la interfaz del ganador le remuevo el estilo display:grid; y me lo quita de pantalla. */
    document.getElementById('mensaje__ganador-tapando').classList.remove('mensaje__ganador-tapando-apareciendo');
    /** Al div que contiene las rondas le remuevo el estilo que las hace aparecer al empezar a jugar. */
    document.getElementById('juego__partidas-costado').classList.remove('juego__partidas-costado-activa');
    /** Agrego el titulo del juego. */
    document.getElementById('juego__titulo').classList.remove('juego__titulo-quitar');
    /** Agrego la interfaz del jugador. */
    document.getElementById('juego').classList.remove('juego-sacar');
    /** Quito los estilos del mensaje vacio al reiniciar la partida. */
    document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
    document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
    /** Le devuelvo el nombre al boton COmenzar. */
    document.getElementById('juego__btn-jugar').textContent = "Comenzar";
    /** Acá reinicio todas las estadisticas. */
    numeroRonda = 1;
    txtRondas.textContent = numeroRonda;
    puntosPC = 0;
    txtPuntoPC.textContent = puntosPC;
    puntosUsuario = 0;
    txtPuntoUsuario.textContent = puntosUsuario;
    empates = 0;
    txtEmpates.textContent = empates;
    /** Y reinicio el form que contiene el nombre de usuario y las opciones. */
    document.getElementById('juego').reset();
}



/** Creo la funcion Jugar de Nuevo luego de hacer terminado una partida. */
function jugarDeNuevo() {
    /** Al div que contiene la interfaz del ganador le remuevo el estilo display:grid; y me lo quita de pantalla. */
    document.getElementById('mensaje__ganador-tapando').classList.remove('mensaje__ganador-tapando-apareciendo');
    /** Al div que contiene el juego le remuevo el estilo display: none; y me muestra todo el juego de nuevo. */
    document.getElementById('sacar').classList.remove('sacar-juego');
    /** Acá reinicio todas las estadisticas. */
    numeroRonda = 1;
    txtRondas.textContent = numeroRonda;
    puntosPC = 0;
    txtPuntoPC.textContent = puntosPC;
    puntosUsuario = 0;
    txtPuntoUsuario.textContent = puntosUsuario;
    empates = 0;
    txtEmpates.textContent = empates;
    /** Reinicio el form que contiene el nombre de usuario y las opciones. */
    document.getElementById('juego').reset();
}



/** Agrego un botón con la funcion Mostrar resultado. */
function mostrarResultado() {
    /** Al div que contiene el juego le remuevo el estilo display: none; y me muestra todo el juego de nuevo. */
    document.getElementById('sacar').classList.remove('sacar-juego');
    /** Acá quito el titulo del juego. */
    document.getElementById('juego__titulo').classList.add('juego__titulo-quitar');
    /** y también quito la interfaz de usuario. Para quedarme solo con las rondas realizadas. */
    document.getElementById('juego').classList.add('juego-sacar');
}
