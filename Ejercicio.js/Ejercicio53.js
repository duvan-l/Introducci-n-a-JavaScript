// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.
let valor1=parseInt(prompt("Ingrese el valor del 1 articulo"));
let valor2=parseInt(prompt("Ingrese el valor del 2 articulo"));
let valor3=parseInt(prompt("Ingrese el valor del 3 articulo"));
let valor4=parseInt(prompt("Ingrese el valor del 4 articulo"));
let valor5=parseInt(prompt("Ingrese el valor del 5 articulo"));
let iva=0.10;
let suma=valor1+valor2+valor3+valor4+valor5;
let iva_sub=suma*iva;
let total=iva_sub+iva;
alert(`el sub total es de ${suma} y el iva es de ${iva_sub} el total de todo es ${total}`);