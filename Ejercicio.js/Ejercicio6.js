// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde.

let nombre = prompt("Ingrese el nombre");
let sexo = prompt("Ingrese Sexo" +  "  Mujer" +  "  Hombre");
let Mujer = /^[A-Z]/g;
let hombre = /^[N-Zn-z]/g;
if (Mujer.test(nombre)==true && sexo== "Mujer") {
    window.alert("Usted es del grupo A")
}
else if (hombre.test(nombre)==true&& sexo == "Hombre") {
    window.alert("Usted Pertenece al grupo A")
}           
else {
  window.alert("Usted es del grupo B")
}
