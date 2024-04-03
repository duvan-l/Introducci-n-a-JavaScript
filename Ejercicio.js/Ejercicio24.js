// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2).
const numero=[2.3e-1, -3e2, 23, 3.2];
let Rex=/[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?/;
if(Rex.test(numero)){
    alert(`Es un numero flotante ${numero}`)
}
else{
    alert(`No es un numero flotante ${numero}`)
}