// Escribir un programa que sume, resta, multiplique y divida dos números.
let num1=prompt("Ingrese un primer digito");
let num2=prompt("Ingrese un segundo digito")
let suma=num1+num2;
let resta=num1-num2;
let multi=num1*num2;
let div=num1/num2;
try{
    if(num1 && num2){
        alert(suma)
    }
    if(num1 && num2){
        alert(resta)
    }
    if(num1 && num2){
        alert(multi)
    }
    if(num1 >0 && num2>0){
        alert(div)
    }
    else{
        throw new Error("No se puede dividir por 0")
    }
}
catch(error){
    alert(error)
}