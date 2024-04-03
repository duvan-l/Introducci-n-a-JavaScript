// . Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión
const inversion=parseFloat(prompt("¿Cuanto va invertir?"));
const interes=parseFloat(prompt("¿Interes porcetual?"));
const num_años=parseInt(prompt("Cuantos años"));
let C_total=inversion;
for(let año=0; año <=num_años;i++){
     C_total *=1+interes/100;
    alert(`La capital tras ${año+1} años: ${C_total.toFixed(2)}`);
}
