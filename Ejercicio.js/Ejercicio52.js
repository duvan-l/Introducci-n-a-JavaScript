// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas
let tipo=prompt("Ingrese que tipo de trabajo tiene de planta o administrativo").toLocaleLowerCase();
const hora_traba_P=20000;
const hora_traba_A=10000;
if(tipo=="p"){
let horas_tra=parseInt(prompt("Ingrese las horas que trabajo"));
let pago=horas_tra*hora_traba_P;
alert(`Su pago es de ${pago}`)
}
else if(tipo=="a"){
    let horas_tra=parseInt(prompt("Ingrese las horas que trabajo"));
    let pago=horas_tra*hora_traba_A;
    alert(`Su pago es de ${pago}`)
}
else{
    alert("No ingreso el tipo de trabajo correcto intentelo")
}