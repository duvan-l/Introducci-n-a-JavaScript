// En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?
let porcion_cacao = prompt("Ingrese la porcion");
let cantidad_cacaoD = prompt("Ingrese la cantidad");
let cantidad_necesaria = (porcion_cacao * 100) / cantidad_cacaoD;
alert(`La cantidad de gramos de la harina es de : ${cantidad_necesaria}`);
