var hamburguesa= prompt("¿Qué hamburguesa quiere: sencilla, doble o triple?")
var cantidad= prompt("¿Cuántas hamburguesas quiere?")
var tarjeta= prompt("¿Su pago es con tarjeta de crédito?")

var sencilla=20
var doble=25
var triple=28

switch (tarjeta){
	case "si":
		switch (hamburguesa){
			case "sencilla":
				var total= sencilla*parseInt(cantidad)
				alert ("El precio total es de: $" + (total + (total*.05)))
			break;
			case "doble":
				var total= doble*parseInt(cantidad)
				alert ("El precio total es de: $" + (total + (total*.05)))
			break;
			case "triple":
				var total= triple*parseInt(cantidad)
				alert ("El precio total es de: $" + (total + (total*.05)))
			break;
		}
	break;
	case "no":
		switch (hamburguesa){
			case "sencilla":
				var total= sencilla*parseInt(cantidad)
				alert ("El precio total es de: $" + total)
			break;
			case "doble":
				var total= doble*parseInt(cantidad)
				alert ("El precio total es de: $" + total)
			break;
			case "triple":
				var total= triple*parseInt(cantidad)
				alert ("El precio total es de: $" + total)
			break;
		}
	break;
}

// switch (hamburguesa){
// 	case "sencilla":
// 		var total= sencilla*parseInt(cantidad)
// 		alert ("El precio total es de: $" + total)
// 	break;
// 	case "doble":
// 		var total= doble*parseInt(cantidad)
// 		alert ("El precio total es de: $" + total)
// 	break;
// 	case "triple":
// 		var total= triple*parseInt(cantidad)
// 		alert ("El precio total es de: $" + total)
// 	break;
// }