//Escribe aquí tu código
var precio1=95
var precio2=85
var precio3=75
var cantPersonas= prompt("Cuantas personas son?")

if (cantPersonas<200){
	alert("El precio total es de: $" + cantPersonas*precio1)
} else if (cantPersonas>200 && cantPersonas<=300){
	alert("El precio total es de: $" + cantPersonas*precio2)
}else{
	alert("El precio total es de: $" + cantPersonas*precio3)
}