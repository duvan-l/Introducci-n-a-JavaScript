// . Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última
let palabra=prompt("Ingrese una palabra")
for(let i=palabra.length-0;i>=0,i--;){
alert(palabra[i])
}