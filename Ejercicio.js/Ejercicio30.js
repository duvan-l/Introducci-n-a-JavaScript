// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.
let contraseña = prompt("Ingrese una contraseña");
let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,12}$/;
if (regex.test(contraseña)) {
  alert(`La contraseña conciden ${contraseña}`);
} else {
  alert(`La contraseña no conciden ${contraseña}`);
}
