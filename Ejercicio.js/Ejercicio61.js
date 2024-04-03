// . Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60
const can_notas=parseInt(prompt("Ingrese la cantidad de notas"));
let a=0,b=0,c=0,d=0,maximo=0,notal_s=0,notal_b=100;
for(let i=0;i<can_notas;i++){
    let nota_al=prompt(`Ingrese la nota del alumno ${i+1}`);
    if(nota_al>notal_s){
        notal_s=nota_al;
    }
    if(nota_al<notal_b){
        notal_b=nota_al;
    }
    if(nota_al==100){
        maximo++;
    }
    if(nota_al<100 && nota_al >=90){
        a++;
    }
    else if(nota_al<90 && nota_al>=80){
        b++;
    }
    else if(nota_al<80 && nota_al>=70){
        c++;
    }
    else if(nota_al<70 && nota_al>=60){
        d++;
    }
}alert(`La nota mas alta es de ${notal_s}
        La nota mas baja ${notal_b}
        La maxima notas fueron ${maximo}
        Estudiantes con A fueron ${a}
        Estudiantes con B fueron ${b}
        Estudiantes con C fueron ${c}
        Estudiantes con D fueron ${d}`)