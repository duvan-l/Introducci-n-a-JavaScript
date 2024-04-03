// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.
let producto1 = prompt("Ingrese el valor de pr1");
let producto2 = prompt("Ingrese el valor de pr2");
let producto3 = prompt("Ingrese el valor de pr3");
let producto4 = prompt("Ingrese el valor de pr4");
let producto5 = prompt("Ingrese el valor de pr5");

let descuento1 = (producto1 + producto2) * 0.1;
let descuento2 = (producto4 + producto5) * 0.04;
let total =
  producto1 +
  producto2 +
  producto3 +
  producto4 +
  producto5 -
  descuento1 -
  descuento2;
alert(
  `El descuento  los dos primeros productos es de ${descuento1} y los ultimos dos productos de ${descuento2} y el total del producto es de ${total}`
);
