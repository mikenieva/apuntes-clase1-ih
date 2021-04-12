// Este es un código de comentario

/*
Hola soy Mike.
Bienvenidos todos a Ironhack.
Esta es la primera clase.
*/

console.log("Hola mundo");
console.log("Cómo estás?");

// ES5 - JAVASCRIPT TRADICIONAL
var botella = "Agua Santa María";

// ES6+ - JAVASCRIPT MODERNO
let carro = "Volkswagen";
let saludo = "Hola Mike";
let cuaderno = "Scribe";

console.log(carro);
console.log("carro");

console.log(saludo);
console.log(cuaderno);

/*
ASIGNACIONES
*/

let tenis = "Adidas";
console.log(tenis);

/* EL PROVEEDOR CAMBIA DE ADIDAS A NIKE */
tenis = "Nike";
console.log(tenis);

tenis = "Rebook";
console.log(tenis);

const computadora = "PC";
console.log(computadora);

// TIP COMUNIDAD: Siempre es un const a menos que se indique lo contrario.

/*
    Creación de contenedores (variables)
    let - Cuando requieran reasignar el valor
    const - Impide reasignación de valor
*/

// TIP MIKE: Siempre utilizar CamelCase
// sumaImpuestos
// restarNomina
// pagarServicioProducto

// De preferencia, siempre Inglés
// Si utilizan español, sin acentos.

// const holaMundo
// const holamundo

let favoriteFood;

favoriteFood = "Steak";

// Método    Texto      Referencia     Texto    Determinación de tipo de dato
console.log("Value: ", favoriteFood, " Type: ", typeof favoriteFood);
//               Separador       Separador   Separador

favoriteFood = 20;
console.log("Value: ", favoriteFood, " Type: ", typeof favoriteFood);

// console:
// Value:  Steak  Type:  string
// Value:  20     Type:  number

/*
TIPOS DE DATOS
PRIMITIVOS
- Número (number)
- Texto (string)
- Booleano (boolean)
- Nulo (null)
- Indefinido (undefined)

NO PRIMITIVOS
*/

// 1. NÚMEROS (number)

const age = 34; // Implicar una operación aritmética
const edad = "34"; // Es texto plano

const taxes = 17000;
const numberBottles = 10;

const price = 12.99;
const taxIVA = 0.16;

const nombre = "Mike";
const result = nombre / 2;
console.log(result); // => NaN Not a Number

// Expressions (Expresiones)
/*
SUMA +
RESTA -
MULTIPLICACIÓN *
DIVISIÓN /
*/

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

// Exponenciales

const resExp = 2 ** 16;
console.log(resExp);

// MODULUS (MODULO)

/*
   5
  ___
2|11
   1 --> Modulus
*/

console.log(11 % 2); // => Modulus es 1

let acc = 8; // acc vale 8
acc += 1; // acc vale 9
// acc = acc + 1    => Son sinónimos de acc+=1

/*
TEXTO o 'string' - TIPO DE DATO 
*/

// ES5 - JAVASCRIPT TRADICIONAL
const miNombre = "Miguel" + " " + "Angel";
console.log(miNombre);
// ES6+
const miApellido = `Nieva Guevara`;
console.log(miApellido);

const gorilla = "Kong";
const reptil = "Godzilla";

// ES5
const pelea = gorilla + " vs " + reptil; // CONCATENACIÓN
console.log(pelea);

// ES6
const batalla = `${gorilla} vs ${reptil}`; // INTERPOLACIÓN
console.log(batalla);

/*
MANIPULACIÓN DE TEXTOS
*/

let emptyContainer = "[SALUDO]";
emptyContainer += "Hello there, student!";
console.log(emptyContainer);

// JAVASCRIPT - Que las posiciones están marcadas a través de un formato "zero-index"

// ACCESO A CARACTERES
// OPCIÓN A. charAt(x)
const greeting = "Hello there!";
console.log(`"${greeting}" is a string and it's length is ${greeting.length}.`);

console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(5)); // <== " "
console.log("Ultimo caracter explícito", greeting.charAt(11)); // <== !
console.log("Último caracter:", greeting.charAt(greeting.length - 1)); // <== !
console.log(greeting.charAt(12)); // <== "" as an empty string

// OPCIÓN B. Índices de corchetes
const greeting2 = "Hello there!";
console.log(greeting2[0]); // <== H
console.log(greeting2[3]); // <== l
console.log(greeting2[9]); // <== r
console.log(greeting2[-2]); // undefined

// SUBSTRING

const message = "Don't be sad, be happy!";
console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf("t")); // <== 4
console.log(message.indexOf("Be")); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf("py")); // 20

// repeat()

console.log("$".repeat(3));
console.log("la".repeat(10));

// TEXTOS

// .substring()
// .substr()
// .slice()

const message3 = "Don't be sad, be happy!";

let withSubstring = message.substring(0, 3);
console.log(withSubstring); // <== Don

let withSubstr = message.substr(0, 3);
console.log(withSubstr); // <== Don

let withSlice = message.slice(0, 3);
console.log(withSlice); // <== Don

//  NÚMEROS NEGATIVOS
let withSubstring1 = message.substring(-3, -1);
console.log(withSubstring1); // <== "" (empty string)

let withSubstr1 = message.substr(-3, -1);
console.log(withSubstr1); // <== "" (empty string)

let withSlice1 = message.slice(-3, -1);
console.log(withSlice1); // <== py

// localeCompare - MÉTODO QUE RETORNA UN NÚMERO INDICITANDO SI UN STRING VIENE ANTES O DESPUÉS O ES LO MISMO DE ACUERDO A UNA JERARQUÍA DE ORDAMIENTO

/* 
   Returns 1 if str1 is greater than str2 according to the language rules. 
   Returns -1 if str1 is less than str2. 
   Returns 0 if they are equal.
*/

// EN ORDEN ASCENDENTE, SI LA 1RA. PALABRA VA ANTES DE LA SEGUNDA, OBTENEMOS -1
// SI LA 1RA. PALABRA VA DESPUÉS DE LA SEGUNDA, OBTENEMOS 1
// SI HAY MAYÚSCULAS-MINÚSCULAS, SE DA PRIORIDAD A LA DE MAYÚSCULA.

console.log("barcelona".localeCompare("miami")); // -1
console.log("miami".localeCompare("barcelona")); // 1
console.log("Miami".localeCompare("miami")); // 1

console.log("miami".localeCompare("miami")); // 0

// ES6 METHODS - startsWith()

const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true

const str1 = "To be, or not to be, that is  the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

// includes
const str2 = "To be, or not to be, that is the question.";

console.log(str.includes("to be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false

// DATOS -> TOMANDO DECISIONES
// VERDADERO O FALSO

let isCompleted = true;
isCompleted = false;

/*

OPERADOR OR
true || true; // => true
true || false; // => true
false || true; // => true
false || false; // => false
false || 4 > 2; // true



OPERADOR AND
true && true; // => true
true && false; // => false
false && true; // => false
false && false; // => false
true && 4 > 2; // => true

!NOT
!true; // => false
!false; // => true
!(4 > 2); // => false

*/

// TIPO DE DATO: UNDEFINED - > INDEFINIDO
// VALOR QUE SE DEFINIRÁ EN EL FUTURO, PERO YA ESTÁ DECLARADA
let name;
console.log(name); // <== undefined

// TIPO DE DATO: NULL
// AUSENCIA DE VALOR

const car = {
  name: "VW",
  electric: false,
  cajuela: null,
};

// EVALUAMOS LOS TIPOS DE DATOS
// TRUTHY
// FALSY

// ESCRITO DE NÚMEROS GRANDES
const someVar = 1e9; // Un 1 + nueve ceros
console.log(someVar);

// MATH.ROUND

let anyNumber = 5.679345;
let roundedToOne = Math.round(anyNumber * 10) / 10;
let roundedToTwo = Math.round(anyNumber * 100) / 100;
let roundedToThree = Math.round(anyNumber * 1000) / 1000;

console.log(roundedToOne); // <== 5.7
console.log(roundedToTwo); // <== 5.68
console.log(roundedToThree); // <== 5.679

// .toFixed (Aplicado hacia un Number)
// let anyNumber = 5.679345;
// let roundedToOne = anyNumber.toFixed(1);
// console.log(roundedToOne); // <== "5.7"

// Math.random
console.log(Math.random()); // <== 0.010086087097095797
console.log(Math.random()); // <== 0.24143918045188073
console.log(Math.random()); // <== 0.23920890331219713

/*
    CONDICIONALES
*/

if (4 === 8) {
  // AL SER FALSO, NO SE EJECUTA LO DE LAS LLAVES. SI ES VERDADERO SÍ SE EJECUTA
  console.log("Son iguales");
} else if (4 === "8") {
  console.log("Si, son iguales");
} else {
  console.log("No son iguales");
}

// const age1 = parseInt(prompt('Welcome to Ironhack cinema. How old are you?'));

// if (age1 <= 16) {
//   console.log('You have a teenager discount.');
// } else if (age1 >= 65) {
//   console.log('You have a senior citizen discount :)');
// } else {
//   console.log("Sorry, you don't have any discount :(");
// }

/*
VAS A CONSTRUIR UN CONDICIONAL QUE SALUDE DE ACUERDO A LA HORA DEL DÍA
    0000 - 1159 -> BUENOS DÍAS
    1200 - 1759 -> BUENOS TARDES
    1800 - 2359 -> BUENAS NOCHES
*/

// SWITCH

switch ("luis") {
  case "eduardo":
    console.log("hola soy eduardo");
    break;
  case "mike":
    console.log("hola soy mike");
    break;
  default:
    console.log("No encontré ninguna coincidencia");
}

/* 
    GENERAR UNA EVALUACIÓN CON IDIOMAS.
    EVALUAR "spanish" y si coincide con un escenario, va a decir: "hola"
    EVALUAR "german" y si coincide con un escenario, va a decir: "hallo"
    EVALUAR "english" y si coincide con un escenario, va a decir: "hello"
*/

// CICLOS

// for

    // 1. Inicialización. Con qué número empiezo a contar
    // 2. Condición
    // 3. Incrementable de la inicialización.


const palabra = "mike"

for(let x=0; x <= palabra.length; x++){
    console.log(`no. de interaciones: ${x}`)
}



// for...of statement

// Generando una variable
const someIterable = 'amsterdam';

// 
for (const value of someIterable) {
  console.log(value);
}

