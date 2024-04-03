// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.
const cursos=parseInt(prompt("Ingresar la cantidad de curso"));
if(cursos<=6){
    let costo1=2000000;
    let total=cursos*costo1;
    alert(`Usted tiene que pagar ${costo1} el total que tiene que pagar es ${total}`)
}
else if(cursos>6){
    let cost2=1200000;
    let total=cursos*cost2;
    alert(`Usted tiene que pagar ${cost2} el total que tiene que pagar es ${total}`)
}
else{
    alert("Error intentelo de nuevo")
}