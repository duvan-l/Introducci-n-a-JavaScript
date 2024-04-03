// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida
let frase = prompt("Ingrese una frase");
let frase_invertida = "";
for (let i = frase.length - 1; i >= 0; i--) {
  frase_invertida += frase[i];
}
alert(`Ahora la frase quedo en ${frase_invertida}`);
