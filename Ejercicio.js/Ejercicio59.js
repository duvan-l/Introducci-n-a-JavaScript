// En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75
const edad=parseInt(prompt("Ingrese la edad"));
const estatura=parseInt(prompt("Ingrese la estatura"));
const peso=parseInt(prompt("Ingrese el peso"));
if(edad <=19 && estatura>175 && peso>=75 && peso<=80){
    alert("Usted puede entrar a la seleccion");
}
else{
    alert("Usted no cumple los requisitos espere");
}