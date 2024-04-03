// los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.
let Renta = prompt("Digite su renta anual ");
if (Renta >= 10000 && Renta<=20000) {
  window.alert("Usted tiene un impositivo de del 5%")
}
else if (Renta >= 20000 && Renta<=35000) {
  window.alert("Usted tiene un impositivo del 10%")
}
else if (Renta >= 35000 && Renta<=60000) {
  window.alert("Usted tiene un impositivo del 20%")
}
else if (Renta > 60000) {
  window.alert("Usted tiene una impositivo del 45%")
}