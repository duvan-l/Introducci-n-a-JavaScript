// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas
let num1=parseInt(prompt("Ingrese un numero"));
if(num1>0){
    let atras="";
    for(let i=num1; i>=0;i--){
        atras+=i +",";
        alert(`La secuencia hacia atras ${atras}`)
    }
}
else{
    alert("Ingrese un numero entero Positivo Intentalo de nuevo")
}