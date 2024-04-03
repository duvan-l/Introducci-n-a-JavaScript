// Escribir un programa que pida al usuario un numero entero y muestre por pantalla
// si es par o impar
let numero = prompt("Ingrese un numero");
if (numero % 2 == 0) {
  window.alert(`El numero es par ${numero}`)
}
else {
  window.alert(`El numero es impar  ${numero}`)
}