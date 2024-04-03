// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla
let num1=parseInt(prompt("Ingrese el primer digito"));
let num2=parseInt(prompt("Ingrese el segundo digito "));
if(num1>num2){
    let e=num1-num2;
    alert(`El total es ${e}`)
}
else{
    alert("El numero 1 no es mayor a numero2")
}