//Escribe aquí tu código
var n1= prompt ("1er numero")
var n2= prompt ("2do numero")
var n3= prompt ("3er numero")

if ((parseInt(n1)>parseInt(n2)) && (parseInt(n1)>parseInt(n3))){
    alert("el mayor es el 1er numero");
}else if (parseInt(n2)>parseInt(n3)){
	alert("El mayor es el 2do numero"); 
}else {
	alert("El mayor es el 3er numero");
}

// if (n1>n2 && n1>n3){
//     alert("el mayor es el 1er numero");
// }else {
// 	if (n2>n3){
// 		alert("El mayor es el 2do numero"); 
// 	} else {
// 		alert("El mayor es el 3er numero");
// 	}
// }