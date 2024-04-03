// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.
const moneda = 100000;
const valorDolar = 0.00028;
const valorEuro = 0.00023;
let peso = parseInt(prompt("Ingrese el monto de peso"));
let dolar = peso * valorDolar;
let euro = peso * valorEuro;
alert(`Se convertio en dolares ${dolar} en euro en ${euro}`);
