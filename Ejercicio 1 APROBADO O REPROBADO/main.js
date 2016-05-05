//Escribe aquí tu código
var n1= prompt ("Primer nota: ")
var n2= prompt ("Segunda nota: ")
var n3= prompt ("Tercer nota: ")
var prom=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3
if (prom>=6){
	alert("Aprobado porque tu promedio es de: " + prom.toFixed(2)) 
}
else{
	alert("Reprobado porque tu promedio es de: " + prom.toFixed(2))
}