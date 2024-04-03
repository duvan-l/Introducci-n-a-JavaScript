// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%
let min=prompt("Ingrese los minutos")
let iva=0.20;
let precio=355
let costo=min*precio;
let total=costo*iva;
alert(`El consto de llama es: ${total}` )