// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente
let m2 = parseFloat(prompt("Ingrese los metros que va a pintar"));
let precio = prompt("Ingrese cuanto cobro por pintar");
let total = m2 * precio;
alert(`El total del costo por m2 es de ${total}`);
