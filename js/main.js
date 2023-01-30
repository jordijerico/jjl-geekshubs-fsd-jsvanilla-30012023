/*
// VARIABLES VAR (boolean, string, number, undefined, function)
var variable1 = true;
var variable2 = "Jordi";
var variable3 = 25;
console.log(variable1);
console.log(variable2);
console.log(variable3);


// VARIABLES LET (reasignar valor cuando quiera)
let variableLet1 = "Soy la variable let 1";
console.log(variableLet1);

variableLet1 = "Ya no soy la variable let 1";
console.log(variableLet1);

// VARIABLES CONST (NO se pueden reasignar valor)

const variableConstUno = "23";
console.log(variableConstUno);

//typeof -> saber tipo de variable
console.log(typeof (variableConstUno));


// OPERACIONES

//Suma
let numeroUno = 110;
let numeroDos = 254;
let suma = numeroDos + numeroUno;
console.log(suma);

// Resta
let resta = numeroDos - numeroUno;
console.log(resta);

//Incrementar
let incrementarUno = ++numeroUno;
console.log(incrementarUno);

//Decrecer
let drecrecerUno = --numeroUno;
console.log(drecrecerUno);
*/
/*



// CALCULADOR NOTAS
let nota = parseInt(prompt("Dime una nota", ""));
let insuficiente = 4;
let suficiente = 6;
let notable = 8;
let sobresaliente = 10;


if (nota >= 0 && nota <= 10) {
    if (nota <= insuficiente && nota >= 0) {
        window.alert("Tu nota es insuficiente, estudia");
    } else if (nota <= suficiente && nota > insuficiente) {
        window.alert("Tu nota es suficiente. No está mal, pero estudia más");
    } else if (nota <= notable && nota > suficiente) {
        window.alert("Tu nota es notable");
    } if (nota <= sobresaliente && nota > notable) {
        window.alert("Tu nota es sobresaliente");
    }
} else {
    window.alert("Introduce una nota valida crack")
}
*/


//CALCULADORA
let numero1 = parseInt(prompt("Dime un numero", ""));
let numero2 = parseInt(prompt("Dime otro numero", ""));
let operacion = prompt("Dime que quieres hacer", "");

if (operacion == "+") {
    let result = numero1 + numero2;
    window.alert(result)
} else if (operacion == "-") {
    let result = numero1 - numero2;
    window.alert(result)
} else if (operacion == "*") {
    let result = numero1 * numero2;
    window.alert(result)
} else if (operacion == "/") {
    let result = numero1 / numero2;
    window.alert(result)
    
}
