// Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado
const calificaciones=parseFloat(prompt("Ingrese el valor de calificacion"));
if(calificaciones>=9.1 && calificaciones<=10){
    alert("Usted obtuvo una A Excelente")
}
else if(calificaciones>=8.1 && calificaciones<=9.1){
    alert("Usted obtuvo una A Muy bien")
}
else if(calificaciones>=7.5 && calificaciones<=8){
    alert("Usted Obtuvo A bien")
}
else if(calificaciones<7.5){
    alert("Usted no aprobo")
}
else{
    alert("Error vuelva a intentar")
}