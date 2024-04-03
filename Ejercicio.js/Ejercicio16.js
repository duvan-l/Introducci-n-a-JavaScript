// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.
let distancia_km=prompt("Ingrese los Km");
let tiempo=prompt("Ingrese los minutos");
let convertir_km=distancia_km*1000;
let convertir_m_s=tiempo*60;
let total=convertir_km/convertir_m_s;
alert(`El resultado es ${total}`)