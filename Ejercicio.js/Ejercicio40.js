// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema
function cal_Edad(año_nac) {
  const año_actual = new Date().getFullYear();
  const edad = año_actual - año_nac;
  return edad;
}
let año_nac = prompt("Ingrese su año de naciemiento");
const edad = cal_Edad(año_nac);
alert(`La edad es de ${edad}`);
