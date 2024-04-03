// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento
const pago= parseInt(prompt("Ingrese el pago"));
const descuento=0.15;
if(pago>=130){
let descuento_=pago*descuento;
let total=pago-descuento_;
alert(`Usted va a tener un descuento porque la suma es mayor o igual a 130 y su descuento es de ${descuento_}
        total es de ${total}`)
}
else{
    alert("Es menor a 130 no tiene descuento")
}