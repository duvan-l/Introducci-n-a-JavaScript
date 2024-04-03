// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará

while(true){
const eco=prompt("Introducce cualquier cosa (Saliar para terminar el programa)");
    if(eco.toLocaleLowerCase()=="salir"){
        break;
    }
    alert(`${eco}`)
}