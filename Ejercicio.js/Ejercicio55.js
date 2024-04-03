// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento
const membresía=prompt("Ingrese que tipo de membresia tiene a , b ,c ").toLocaleLowerCase();
if(membresía=="a"){
    const descuento_a=0.10;
    let compra=parseInt(prompt("Ingrese el valor de la compra"));
    let iva=compra*descuento_a;
    let total=compra-iva;
    alert(`Su compra es de ${compra} el iva es de ${iva} el total es de ${total}`)
}
else if(membresía=="b"){
    const descuento_b=0.15;
    let compra=parseInt(prompt("Ingrese el valor de la compra"));
    let iva=compra*descuento_b;
    let total=compra-iva;
    alert(`Su compra es de ${compra} el iva es de ${iva} el total es de ${total}`)
}
else if(membresía=="c"){
    const descuento_c=0.20;
    let compra=parseInt(prompt("Ingrese el valor de la compra"));
    let iva=compra*descuento_c;
    let total=compra-iva;
    alert(`Su compra es de ${compra} el iva es de ${iva} el total es de ${total}`)
}
else{
    alert("No conciden intentelo de nuevo")
}