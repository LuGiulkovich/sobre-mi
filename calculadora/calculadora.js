function limpiarCampos() {
    document.getElementById('formulario').reset();
}

function calcular() {

    let operando1 = parseFloat(document.getElementById('numero1').value);
    let operando2 = parseFloat(document.getElementById('numero2').value);
    let opcion = document.getElementById('opciones').value;
    
    let resultado;

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
    document.getElementById('el-resultado').innerHTML = resultado;
}

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
