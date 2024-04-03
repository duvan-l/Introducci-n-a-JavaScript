// . Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado
const saldo=parseInt(prompt("Ingrese su saldo "));
if(saldo<100000){
    let interes=0.03;
    let interes_t=interes*saldo;
    let total=saldo-interes_t;
    alert(`Su interes quedaria en ${interes_t} y su saldo es de ${total}`)
}
else if(saldo>100000){
    let interes=0.04;
    let interes_t=interes*saldo;
    let total=saldo-interes_t;
    alert(`Su interes quedaria en ${interes_t} y su saldo es de ${total}`)
}
else{
    alert("Error vuelva a intentar")
}