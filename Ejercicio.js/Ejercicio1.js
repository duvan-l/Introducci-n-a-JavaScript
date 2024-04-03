// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
// mayor o menor de edad, el programa debe validar que solo se puedan ingresar
// números positivos
let edad = prompt("Ingrese su edad ");
if (edad >= 18) {
  window.alert("Usted es Mayor de edad")
}
else if (edad < 17 && edad>0) {
  window.alert("Usted es menor de edad")
}
else
  window.alert("¡Error!")
