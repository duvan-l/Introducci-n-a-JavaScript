// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.
let a=prompt("Ingrese el valor de A")
let b=prompt("Ingrese el valor de B")
let c=prompt("Ingrese el valor de C")
let r1;
let r2;
let discrimi=(b^2)-4*a*c;
if(discrimi>0){
r1=(-b+ Math.sqrt(discrimi))/(2*a);
r2=(-b-Math.sqrt(discrimi))/(2*a)
alert(`La verificacion del discriminare si son reales ${r1} y ${r2}`)
}
else if(discrimi==0){
    r1=-b/2*a
    alert(`La raiz doble es : ${r1}`)
}
else if(discrimi<0){
alert("El discriminate es negativo, no van a ver funciones")
}
// let total=a*Math.pow(X,2)+b+X+c
// alert(`El resultado es ${total}`)