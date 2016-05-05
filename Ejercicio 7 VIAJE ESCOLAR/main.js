//Escribe aquí tu código
var costo1=65 //100 o mas
var costo2=70 //50-99
var costo3=95 //30-49
var costo4=4000 // <30
var alumnos=prompt("Cuantos alumnos son?")

var total1=costo1*parseInt(alumnos)
var total2=costo2*parseInt(alumnos)
var total3=costo3*parseInt(alumnos)

if(alumnos>=100){
	alert("El costo total es de:$ " + total1 + " y el costo por alumno es de: $" + total1/alumnos)
}else if (alumnos>=50 && alumnos<=99){
	alert("El costo total es de:$ " + total2 + " y el costo por alumno es de: $" + total2/alumnos)
}else if (alumnos>=30 && alumnos<=49){
	alert("El costo total es de:$ " + total3 + " y el costo por alumno es de: $" + total3/alumnos)
}else{
	alert("El costo total es de $ " + costo4 + " y el costo por alumno es de: $" + costo4/alumnos)
}