// . Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta
const contra="contraseña13yp"
let ingrese_contra=prompt("Ingrese la contraseña");
while(ingrese_contra!== contra){
    alert("La contraseña es incorrecta intentelo")
    ingrese_contra=prompt("Ingrese la contraseña");
}
window.alert("La contraseña es correcta ")