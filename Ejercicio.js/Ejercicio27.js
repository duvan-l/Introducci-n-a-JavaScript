// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final
let parcia1=prompt("Ingrese la nota 1");
let parcia2=prompt("Ingrese la nota 2");
let parcia3=prompt("Ingrese la nota 3");
let exam=prompt("Ingrese la nota de el examen");
let tra_f=prompt("Ingrese la nota del trabajo fianl")
let promedio_p=parcia1+parcia2+parcia3/3;
let promedio_t=promedio_p*0.55+exam*0.30+tra_f*0.15;
alert(`El promedio final es de ${promedio_t}`)