// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están

// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.
let pregunta = prompt("¿Quiere una pizza vegetariana  o no?").toLowerCase();
let Ingredientes_ve =("Pimentos y tofu")
let Ingredientes_no_ve = ("Pepperoni Jamon y Salmon");
let ingrediente_escogido
if (pregunta == "vegetariana") {
  ingrediente_escogido=prompt("Elige los ingredientes: Pimiento y Tofu").toLowerCase()
  if (ingrediente_escogido == "pimiento"|| ingrediente_escogido=="tofu") {
    window.alert(`La pizza es vegetariana y tiene ${ingrediente_escogido}`)
  }
  else{
    window.alert("No ha elegido ninguna opcion")
  }
  
}
else if (pregunta == "no") {
  ingrediente_escogido=prompt("Elige los ingredientes: Pepperoni Jamon y Salmon ").toLowerCase()
  if (ingrediente_escogido == "pepperoni"|| ingrediente_escogido=="jamon"||ingrediente_escogido=="salmon") {
    window.alert(`La pizza es no vegetariana y tiene ${ingrediente_escogido}`)
  }
  else{
    window.alert("No ah elegido ninguna opcion ")
  }
}
