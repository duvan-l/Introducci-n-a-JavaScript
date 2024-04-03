// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos. 
let contra = "Sena123";
let contra_usu = prompt("Digite la contraseña almacenada").toUpperCase
if (contra == contra_usu) {
  window.alert(`Su contra conciden ${contra}`)
}
else {
  window.alert("Error")
}