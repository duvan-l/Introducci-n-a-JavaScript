// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?
const llaves = 11500;
const bomba = 1168000;
const pernos = 87000;
const sobra = 91000;
const cantidad_bomba = 1;
const cajas_p = 3;
const llaves_hexa = 5;
const total_llaves = llaves * llaves_hexa;
const total_bomba = bomba * cantidad_bomba;
const total_pernos = pernos * llaves_hexa;
const total = total_llaves + total_bomba + total_pernos;
alert(`Lo que tiene el jefe de obra es de ${total}`);
