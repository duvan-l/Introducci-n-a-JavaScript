// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.
let precio=prompt("Ingrese el precio del producto");
let iva=0.10;
let descuento=precio*iva;
let total=precio-descuento;
alert(`Su descuento es de ${descuento} y su precio total es de ${total}`)