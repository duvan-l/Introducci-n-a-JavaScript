// Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.
  let num1 = prompt("Ingrese el numero 1");
  let num2 = prompt("Ingrese el numero 2");
  let div= num1 / num2;
  try {
    if (num1 >0 && num2 >0) {
      window.alert(div)
    }
    else
    throw new Error("No se puede dividir por 0")
  }
  catch (error) {
    window.alert(error);
        
}



