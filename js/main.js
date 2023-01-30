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

let nota = prompt("Dime una nota", "");
let insuficiente = 4;
let suficiente = 6;
let notable = 8;
let sobresaliente = 10;

if (nota <= insuficiente && nota >= 0) {
    window.alert("Tu nota es insuficiente");
} else if (nota <= suficiente && nota > insuficiente) {
    window.alert("Tu nota es suficiente");
} else if (nota <= notable && nota > suficiente) {
    window.alert("Tu nota es notable");
}
if (nota <= sobresaliente && nota > notable) {
    window.alert("Tu nota es sobresaliente");
}
