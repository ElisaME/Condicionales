//Escribe aquí tu código
var personas= prompt("Cuantas personas son?")
var distancia= prompt("Cual es la distancia?")

var totalA=(2*distancia)*personas
var totalB=(2.5*distancia)*personas
var totalC=(3*distancia)*personas

var totalAmin=(2*distancia)*20
var totalBmin=(2.5*distancia)*20
var totalCmin=(3*distancia)*20

if(personas<20){
	alert("El precio total en clase A es de: $" + totalAmin + " y el precio por persona es de:$" + totalAmin/personas
	+ "\nEl precio total en clase B es de: $" + totalBmin + " y el precio por persona es de:$" + totalBmin/personas
	+ "\nEl precio total en clase C es de: $" + totalCmin + " y el precio por persona es de:$" + totalCmin/personas)
}else{
	alert("El precio total en clase A es de: $" + totalA + " y el precio por persona es de:$" + totalA/personas
	+ "\nEl precio total en clase B es de: $" + totalB + " y el precio por persona es de:$" + totalB/personas
	+ "\nEl precio total en clase C es de: $" + totalC + " y el precio por persona es de:$" + totalC/personas)
}
