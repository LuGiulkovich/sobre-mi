## Prueba y Error

### 1er Error: No me corre el JS

Haciendo la primer prueba para verificar que mi Input (donde ingresa el usuario su nombre) no estuviera vacio me sale por consola este error: 

>Uncaught ReferenceError: campoVacio is not defined
>    at HTMLButtonElement.onclick (index.html?nombreJugador=:63:84)

y buscando y comparando con el proyecto de la calculadora veo que en vez de linkear mi JS de esta manera:

~~~
<script src="juego.js"></script>
~~~

Lo habia hecho así:

~~~
<script href="juego.js"></script>
~~~

#### Importante

Asegurarse de usar las palabras correctas.

### 2do Error: No me lee el nombre (valor)

Al ingresar el nombre de usuario me salia el error de input vacio y no sabía por qué.
Este era el codigo que tenia:

~~~
const nombreJugador = document.getElementById('juego__interfaz-input-nombre').value;

function campoVacio() {
    if (nombreJugador === '') {
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio-activado');
    } else {
        document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
    }
}
~~~

Haciendo pruebas llegué a la solución de que estaba pidiendo el valor al mismo tiempo que lo guardaba en una variable.

Por alguna razón por consola me imprimia ('') y no el nombre hasta que lo inicialicé y guardé en una variable dentro de la funcion campoVacio().

~~~
const nombreJugador = document.getElementById('juego__interfaz-input-nombre');

function campoVacio() {
    const nombre = nombreJugador.value;

    if (nombre === '') {
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio-activado');
    } else {
        document.getElementById('juego__mensaje-vacio').classList.remove('juego__mensaje-vacio-activado');
        document.getElementById('juego__mensaje-vacio').classList.add('juego__mensaje-vacio');
    }
}
~~~

### 3er Error: Declarar muchas funciones y eventos al dope 
Al momento de hacer las reglas del juego y obtener mi jugada, la de la PC y conmpararlas comencé a declarar muchas funciones, como:

~~~
function jugadaPC() { 
    numeroPC = Math.floor(Math.random() * (2 - 0 + 1) + 0);
}
~~~

tambien:

~~~
function declaraPC() {
    if (numeroPC === 0) {
        eleccionPC = "piedra";
    } else if (numeroPC === 1) {
        eleccionPC = "papel";
    } else if (numeroPC === 2) {
        eleccionPC = "tijeras"
    }
}
~~~

Algunos eventos al botón para jugar.
~~~
const pc = document.getElementById('juego__btn-jugar');

pc.addEventListener('click', jugadaPC);
pc.addEventListener('click', declaraPC);
~~~

o esta que tambien le hacia ejecutar una funcion al boton para determinar el ganador.
~~~
pc.addEventListener('click', determinarGanador);
~~~

En mi cabeza tenia sentido pero la consola no decia lo mismo, por lo que opté por meter todo en una sola función para que el código tuviera mas sinergia (de alguna forma pensaba que no me iba a funcionar) y al momento de hacerlo todo funcionó como debá, obvio que con algunas modificaciones. 

### 4to Error: No me imprime el nombre del jugador

En mi código, cuando necesitaba que me imprimiera el nombre del jugador cuando gana una ronda lo habia hecho así: 

~~~
}   else if (eleccionPC == "Tijeras") {
        document.getElementById('ganador').innerHTML = nombreJugador;
        console.log('gana jugador');
    }
~~~

Donde nombreJugador es la variable que guardaba el nombre del jugador. Pero cuando lo quería mostrar por pantalla me salía este error:

>[object HTMLInputElement]

Lo logré resolver al darme cuenta que no estaba obteniendo el valor del nombre de jugador sino al input de esta manera:

~~~
const nombreGuardado = nombreJugador.value;
~~~

### 5to Error: La cantidad de rondas no se muetra correctamente

Cuando oprimia el botón de jugar ocurría que la cantidad de rondas no me cargaba como debía, y cuando revisé el código me encontré que tenia la suma de las rondas en un condicional.

~~~
        } else if (eleccionPC == "Tijeras") {
            document.getElementById('ganador').innerHTML = 'Ninguno, empate';
            empates += 1;
        }
        numeroRonda += 1;
    }
~~~

La solución fue ponerlo mas abajo para que se ejecutara bien.

~~~
    }
    numeroRonda += 1;
~~~

## Información Utilizada

Esta fue la información en la que me base y ayudé a hacer mi proyecto

De aquí saqué la idea de como hacerlo para que fuera al mejor de 5 puntos
* [PiedraPapelTijeras3Puntos] (https://github.com/Barriose01/PiedraPapelOTijera3PuntosJS)
