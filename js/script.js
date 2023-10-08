// FUNCTIONS

/**
 * Imprime un mensaje en la consola.
 * @param {*} toPrint - Parámetro a imprimir en consola.
 * @returns {void}
 */
const consolePrint = toPrint => console.log(toPrint);


/**
 * Calcula el discriminante de un polinomio cuadrático.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number}
 */
const discriminante = (a, b, c) => (b ** 2) - (4 * a * c);


/**
 * Calcula las raíces complejas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} disc - Discriminante del polinomio cuadrático.
 * @returns {string}
 */
function complexRoots(a, b, disc) {
    let firstTerm = -b / (2 * a);
    let secondTerm = ((-disc) ** 0.5) / (2 * a);
    let result = "x1 = " + firstTerm + " + " + secondTerm + "i ; x2 = " + firstTerm + " - " + secondTerm + "i";
    if (firstTerm === 0) { // Mejora la presentación del resultado
        result = "x1 = " + secondTerm + "i ; x2 = " + " - " + secondTerm + "i";
    }
    return result
}


/**
 * Calcula las raíces reales repetidas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @returns {string}
 */
function realRepeatedRoots(a, b) {
    let root = -b / (2 * a);
    return "x1 = " + root + " ; x2 = " + root;
}


/**
 * Calcula las raíces reales distintas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} disc - Discriminante del polinomio cuadrático.
 * @returns {string}
 */
function realDistinctRoots(a, b, disc) {
    let x1 = (-b + disc ** 0.5) / (2 * a);
    let x2 = (-b - disc ** 0.5) / (2 * a);
    return "x1 = " + x1 + " ; x2 = " + x2;
}


/**
 * Determina el tipo de raíces de un polinomio cuadrático y las calcula.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} c - Constante c del polinomio cuadrático.
 * @returns {string}
 */
function resolvente(a, b, c) {
    let message = "";
    let disc = discriminante(a, b, c);
    if (disc < 0) {
        message = "Raíces complejas: " + complexRoots(a, b, disc);
    } else if (disc === 0) {
        message = "Raices reales repetidas: " + realRepeatedRoots(a, b);
    } else {
        message = "Raices reales distintas: " + realDistinctRoots(a, b, disc);
    }
    return message;
}


/**
 * Valida que la constante ingresada sea un número.
 * @param {*} data - Valor de la constante ingresado por el usuario. 
 * @param {string} constant - Nombre de la constante a mostrar.
 * @returns {number}
 */
const constantValidation = (data, constant) => {
    while (isNaN(data)) {
        data = parseFloat(prompt("Ingrese la constante '" + constant + "' del polinomio cuadrático (ax^2+bx+c=0)"));
        if (isNaN(data)) {
            alert("La constante '" + constant + "' debe ser un número. Vuelva a ingresarla.");
        }
    }
    return data;
}


/**
 * Lee los datos necesarios para resolver el polinomio cuadrático de grado 2 y muestra el resultado.
 */
function cuadratico() {
    let a, b, c = NaN;
    a = constantValidation(a, "a");
    b = constantValidation(b, "b");
    c = constantValidation(c, "c");
    alert(resolvente(a, b, c));
}


/**
 * Calcula el promedio de una serie de números cargados por el usuario y muestra el resultado.
 */
function promedio() {
    let average = 0;
    let count = 0;
    let data = "";
    while (true) {
        data = prompt("Ingrese un número y acepte, se le pedirá el siguiente número.\nPara finalizar el proceso de carga de datos presione 'X'.");
        if (data === "X" || data === "x") {
            break; // Finaliza la carga de datos.
        }
        data = parseFloat(data);
        if (isNaN(data)) {
            alert("No ha ingresado un valor numérico.");
        } else {
            average += data;
            count += 1;
        }
    }
    if (count === 0) {
        alert("No es posible calcular un promedio sin datos.");
    } else {
        alert("El promedio es: " + (average / count));
    }
}


const mainMessage = "Seleccione una opción:\n 1. Resolver polinomio cuadrático.\n 2. Calcular promedio.\n X. Finalizar.";


/**
 * Programa principal.
 */
const main = () => {
    let execution = true;
    while (execution) {
        let option = prompt(mainMessage);
        switch (option) {
            case "1":
                cuadratico();
                break;

            case "2":
                promedio();
                break;

            case "X":
                alert("Proceso finalizado.");
                execution = false;
                break;

            case "x":
                alert("Proceso finalizado.");
                execution = false;
                break;

            default:
                alert("Ha ingresado una opción inválida.")
                break;
        }
    }
};



// EXECUTION

main();