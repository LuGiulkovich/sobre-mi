/** Pongo en una variable el contenido de los inputs
 * ya que estos contienen el id="numerox" respectivamente.
 */
const inputNum1 = document.getElementById('numero1');
const inputNum2 = document.getElementById('numero2');

/** Creo una variable que toma como valor el valor que tiene el input del formulario */
const inputs = document.querySelectorAll('#formulario input');

/** Validacion del largo limite de los inputs */
const maxLargo = (e) => {
    switch (e.target.name) {
        case "operando1":
            let valorInput = e.target.value;
            let max = valorInput.split('');
            if (max.length >= 7) {
                document.getElementById('formulario__input-grande1').classList.add('formulario__input-error-activado');
                document.getElementById('grupo__numero1').classList.add('formulario__grupo-incorrecto');
            } else {
                document.getElementById('formulario__input-grande1').classList.remove('formulario__input-error-activado');
                document.getElementById('grupo__numero1').classList.remove('formulario__grupo-incorrecto');
            }
            console.log('funciona');
        break;
        case "operando2":
            let valorInput2 = e.target.value;
            let max2 = valorInput2.split('');
            if (max2.length >= 7) {
                document.getElementById('formulario__input-grande2').classList.add('formulario__input-error-activado');
                document.getElementById('grupo__numero2').classList.add('formulario__grupo-incorrecto');
            } else {
                document.getElementById('formulario__input-grande2').classList.remove('formulario__input-error-activado');
                document.getElementById('grupo__numero2').classList.remove('formulario__grupo-incorrecto');
            }
            console.log('funciona');
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', maxLargo)});

/**        let valorInput = input.value;
        let max = valorInput.split('');
 
        switch (input) {
            case 
        }
        if (max.length >= 7) {
            console.log('es muy largo');
            document.getElementById('formulario__input-grande1').classList.add('formulario__input-error-activado');
        } else {
          document.getElementById('formulario__input-grande1').classList.remove('formulario__input-error-activado');
          console.log('es muy corto');
        
    });}
});*/

/** Funcion para limpiar todos los campos
 * de la calculadora.
 */
function limpiarCampos() {
    document.getElementById('formulario').reset();
}

/** Funcion que llamará a ejecutar el boton de "Calcular"
 * que contiene las validaciones y calculos a realizar.
 */
function calcular() {

    /** Guardo en variables y paso a flotantes los valores
     * que contienen los inputs anteriores.
     */
    const operando1 = parseFloat(inputNum1.value);
    const operando2 = parseFloat(inputNum2.value);

    /** Declaro y guardo el valor de las opciones que
     * hay en el meníu desplegable.
     */
    const opcion = document.getElementById('opciones').value;

    /** Inicializo la variable resultado para 
     * contener el resultado de los calculos.
     */
    let resultado;

    /** Declaro esta variable noResultado para
     * decidir si mostrar el resultado de los calculos o no
     * dependiendo si me conviene hacerlo.
     */
    let noResultado = 'mostrar';

    /** ----- Validaciones para los inputs ----- */

    /** Si el primer input no es un numero agrego el mensaje de error
     * y actualizo en valor de la variable noResultado a 'noMostrar'
     * para no mostrar el resultado NaN en la interfaz de usuario. */
    if (isNaN(operando1)) {
        document.getElementById('formulario__input-error1').classList.add('formulario__input-error-activado');
        document.getElementById('grupo__numero1').classList.add('formulario__grupo-incorrecto');
        noResultado = 'noMostrar';
    } else {
    /** Sino quita el mensaje de error o lo deja oculto como estaba (display: none;),
     * y me carga el estrilo de correcto*/
        document.getElementById('formulario__input-error1').classList.remove('formulario__input-error-activado');
        document.getElementById('grupo__numero1').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__numero1').classList.add('formulario__grupo-correcto');
        noResultado = noResultado;
    }
    
    /** Validacion del input que contiene el Número 2 para que no sea NaN. */
    if (isNaN(operando2)) {
        document.getElementById('formulario__input-error2').classList.add('formulario__input-error-activado');
        document.getElementById('grupo__numero2').classList.add('formulario__grupo-incorrecto');
        noResultado = 'noMostrar';
    } else {
        document.getElementById('formulario__input-error2').classList.remove('formulario__input-error-activado');
        document.getElementById('grupo__numero2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__numero2').classList.add('formulario__grupo-correcto');
        noResultado = noResultado;
    }

    /** Validacion para que el usuario eliga una operacion. */    
    if (opcion === "vacio") {
        document.getElementById('formulario__mensaje-operacion').classList.add('formulario__mensaje-activo');
        noResultado = 'noMostrar';
    } else {
        document.getElementById('formulario__mensaje-operacion').classList.remove('formulario__mensaje-activo');
        noResultado = noResultado;
    }

    /** Validacion para no dividir por 0. */
    if (operando1 === 0 && opcion === "division" || operando2 === 0 && opcion === "division") {
        document.getElementById('formulario__mensaje-0').classList.add('formulario__mensaje-activo');
        noResultado = 'noMostrar';
    } else {
        document.getElementById('formulario__mensaje-0').classList.remove('formulario__mensaje-activo');
        noResultado = noResultado;
    }

    /** Switch para la realizacion de los calculos establecidos en el Menú desplegable. */
    switch (opcion) {
        case "suma":
            resultado = suma(operando1, operando2);
            break;
        case "resta":
            resultado = resta(operando1, operando2);
            break;
        case "division":
            resultado = division(operando1, operando2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(operando1, operando2);
            break;
    }

    /** Validacion para que el resultado no sea tan grande. */
    if (resultado >= 9999999) {
        document.getElementById('formulario__mensaje-tamaño-grande').classList.add('formulario__mensaje-activo', 'formulario__mensaje-activo-grande');
        noResultado = 'noMostrar';
    } else {
        document.getElementById('formulario__mensaje-tamaño-grande').classList.remove('formulario__mensaje-activo', 'formulario__mensaje-activo-grande');
        noResultado = noResultado;
    }

    /** Validacion para que el resultado no sea tan pequeño. */
    if (resultado <= -99999) {
        document.getElementById('formulario__mensaje-tamaño-pequeño').classList.add('formulario__mensaje-activo', 'formulario__mensaje-activo-pequeño');
        noResultado = 'noMostrar';
    } else {
        document.getElementById('formulario__mensaje-tamaño-pequeño').classList.remove('formulario__mensaje-activo', 'formulario__mensaje-activo-pequeño');
        noResultado = noResultado;
    }

    /** Validacion del resultado para ser o no mostrado en 
     * la interfaz de usuario dependiendo de lo noResultado
     * halla almacenado antes.
     */
    if (noResultado === 'mostrar') {
        document.getElementById('el-resultado').innerHTML = resultado;
    }  
}


/** Funciones con las operaciones básicas de la calculadora. */
function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function division(x, y) {
    return x / y;
}

function multiplicacion(x, y) {
    return x * y;
}
