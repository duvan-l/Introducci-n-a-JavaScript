// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma
let num1=parseInt(prompt("Ingrese un numero"));
if(num1>0){
    let numeros_impares="";
for(let i=1;i<=num1;i++ ){
    if(i%2 !==0){
    numeros_impares+=i +",";
        alert(`Los numeros impares son ${numeros_impares}`)
    }
}}
else{
    alert("Ingrese un numero entero positivo intentelo de nuevo")
}
