// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.
const libros = 10000;
const cuadernos = 7550;
const lapiceros = 5550;
let cantida_libros = prompt("Ingrese la cantidad de libros");
let cantidad_cuadernos = prompt("Ingrese la cantidad de cuadernos");
let cantidad_lapiceros = prompt("Ingrese la cantidad de lapiceros");
let monto_total =
  cantida_libros * libros +
  cantidad_cuadernos * cuadernos +
  cantidad_lapiceros * lapiceros;
alert(`El total de la venta ${monto_total}`);
