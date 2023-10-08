// CLASSES

class Poly2 {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getA() { return this.a; }
    getB() { return this.b; }
    getC() { return this.c; }

    setA(a) { this.a = a; }
    setB(b) { this.b = b; }
    setC(c) { this.c = c; }
}


class Roots {
    constructor(x1, x2) {
        this.x1 = x1;
        this.x2 = x2;
    }

    getX1() { return this.x1; }
    getX2() { return this.x2; }

    setX1() { this.x1 = x1; }
    setX2() { this.x2 = x2; }

    printRoots() { return "x1 = " + this.x1 + " ; x2 = " + this.x2; }
}



// FUNCTIONS

/**
 * Imprime un mensaje en la consola.
 * @param {*} toPrint - Parámetro a imprimir en consola.
 * @returns {void}
 */
const consolePrint = toPrint => console.log(toPrint);


/**
 * Calcula el discriminante de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} c - Constante c del polinomio cuadrático.
 * @returns {number} - Discriminante del polinomio cuadrático.
 */
const discriminante = (poly2Obj) => Math.pow(poly2Obj.getB(), 2) - (4 * poly2Obj.getA() * poly2Obj.getC());


/**
 * Calcula las raíces complejas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} disc - Discriminante del polinomio cuadrático (negativo).
 * @returns {object} - Instancia de la clase Roots.
 */
function complexRoots(a, b, disc) {
    let firstTerm = (-b / (2 * a));
    let secondTerm = (Math.sqrt(-disc) / (2 * a));
    let x1 = firstTerm + " + " + secondTerm + "i";
    let x2 = firstTerm + " - " + secondTerm + "i";
    if (firstTerm === 0) { // Mejora la presentación del resultado
        x1 = secondTerm + "i";
        x2 = " - " + secondTerm + "i";
    }
    const rootsObj = new Roots(x1, x2);
    return rootsObj
}


/**
 * Calcula las raíces reales repetidas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @returns {object} - Instancia de la clase Roots.
 */
function realRepeatedRoots(a, b) {
    let root = (-b / (2 * a));
    const rootsObj = new Roots(root, root);
    return rootsObj
}


/**
 * Calcula las raíces reales distintas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} disc - Discriminante del polinomio cuadrático (positivo).
 * @returns {object} - Instancia de la clase Roots.
 */
function realDistinctRoots(a, b, disc) {
    let x1 = ((-b + Math.sqrt(disc)) / (2 * a));
    let x2 = ((-b - Math.sqrt(disc)) / (2 * a));
    const rootsObj = new Roots(x1, x2);
    return rootsObj;
}


/**
 * Determina el tipo de raíces de un polinomio cuadrático y las calcula.
 * @param {object} poly2Obj - Instancia de la clase Poly2.
 * @returns {string}
 */
function resolvente(poly2Obj) {
    let message = "";
    let rootsObj = new Roots();
    let disc = discriminante(poly2Obj);
    if (disc < 0) {
        message = "Raíces complejas: ";
        rootsObj = complexRoots(poly2Obj.getA(), poly2Obj.getB(), disc);
    } else if (disc === 0) {
        message = "Raices reales repetidas: ";
        rootsObj = realRepeatedRoots(poly2Obj.getA(), poly2Obj.getB());
    } else {
        message = "Raices reales distintas: ";
        rootsObj = realDistinctRoots(poly2Obj.getA(), poly2Obj.getB(), disc);
    }
    return message + rootsObj.printRoots();
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
        } else if (constant === "a" && data === 0) {
            alert("La constante '" + constant + "' debe ser distinta de cero. Vuelva a ingresarla.");
            data = NaN;
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
    const poly2Obj = new Poly2(a, b, c);
    alert(resolvente(poly2Obj));
}


/**
 * Calcula el promedio de una serie de números cargados por el usuario y muestra el resultado.
 */
function promedio() {
    let average = 0;
    let count = 0;
    let data = "";
    let numbersList = [];
    while (true) {
        data = prompt("Ingrese un número y acepte, se le pedirá el siguiente número.\nPara finalizar el proceso de carga de datos presione 'X'.");
        if (data === "X" || data === "x") {
            break; // Finaliza la carga de datos.
        }
        data = parseFloat(data);
        if (isNaN(data)) {
            alert("No ha ingresado un valor numérico.");
        } else {
            numbersList.push(data);
        }
    }
    // if (count === 0) {
    if (numbersList.length === 0) {
        alert("No es posible calcular un promedio sin datos.");
    } else {
        // alert("El promedio es: " + (average / count));
        alert("El promedio es: " + (numbersList.reduce((sum, element) => sum + element, 0) / numbersList.length));
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