//Escribe aquí tu código
var precio= prompt ("Cual es el precio del traje?")
var precio15=parseFloat(precio)*.85
var precio8=parseFloat(precio)*92

if (precio>2500){
	alert ("Tiene 15% de descuento, el precio final es de $"+ precio15)
}else{
	alert ("Tiene 8% de descuento, el precio final es de $" + precio8)
}
