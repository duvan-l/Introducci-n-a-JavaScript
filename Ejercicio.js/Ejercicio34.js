// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.
let caulda_litro = prompt("Ingrese la cantidad del agua");
let altura = parseFloat(prompt("Ingrese la altura"));
let tiempo = prompt("Ingrese los minutos");
let radio = parseFloat(prompt("Ingrese el valor del radio"));
let volumen = Math.PI * Math.pow(radio, 2) * altura;
tiempo * 60;
volumen * 1000;
tiempot = volumen / caulda_litro;
alert(`El tiempo que se demora llenando es ${tiempot}`);
