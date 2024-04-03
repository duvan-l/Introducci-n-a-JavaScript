// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no
let num1=parseInt(prompt("Ingrese un numero entero"));
let espri=true
if(num1<=1){
        espri=false
}
else{
    for(let i=2; i<=num1/2;i++){
        if(num1 %i ==0){
            espri=false
        }
    }
}
if(espri){
    alert(`${num1} es un numero primo`)
}
else{
    alert(`${num1} No es un numero primo`)
}