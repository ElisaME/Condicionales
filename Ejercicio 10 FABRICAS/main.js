var materiaP=prompt("Costo de materia prima:")
var articulo= prompt("Clave del artículo:")
//Mano de obra
switch (articulo){
	case "1":
		var mo=parseInt(materiaP)*.80
		var gf=parseInt(materiaP)*.28
		var CP = mo+gf+parseInt(materiaP)
		alert("La mano de obra es de: $" + mo + "\nLos gastos de fabricacion son de: $" + gf 
			+ "\nLos costos de produccion son: $" + CP
			+ "\nEl precio de venta es de: $" + (CP + (CP*.45)))
	break;
	case "2": 
		var mo=parseInt(materiaP)*.0685
		var gf=parseInt(materiaP)*.30
		var CP = mo+gf+parseInt(materiaP)
		alert("La mano de obra es de: $" + mo + "\nLos gastos de fabricacion son de: $" + gf 
			+ "\nLos costos de produccion son: $" + CP
			+ "\nEl precio de venta es de: $" + (CP + (CP*.45)))
	break;
	case "3": 
		var mo=parseInt(materiaP)*.75
		var gf=parseInt(materiaP)*.35
		var CP = mo+gf+parseInt(materiaP)
		alert("La mano de obra es de: $" + mo + "\nLos gastos de fabricacion son de: $" + gf 
			+ "\nLos costos de produccion son: $" + CP
			+ "\nEl precio de venta es de: $" + (CP + (CP*.45)))
	break;
	case "4": 
		var mo=parseInt(materiaP)*.75
		var gf=parseInt(materiaP)*.28
		var CP = mo+gf+parseInt(materiaP)
		alert("La mano de obra es de: $" + mo + "\nLos gastos de fabricacion son de: $" + gf 
			+ "\nLos costos de produccion son: $" + CP
			+ "\nEl precio de venta es de: $" + (CP + (CP*.45)))
	break;
	case "5": 
		var mo=parseInt(materiaP)*.80
		var gf=parseInt(materiaP)*.30
		var CP = mo+gf+parseInt(materiaP)
		alert("La mano de obra es de: $" + mo + "\nLos gastos de fabricacion son de: $" + gf 
			+ "\nLos costos de produccion son: $" + CP
			+ "\nEl precio de venta es de: $" + (CP + (CP*.45)))
	break;
	case "6": 
		var mo=parseInt(materiaP)*.0685
		var gf=parseInt(materiaP)*.35
		var CP = mo+gf+parseInt(materiaP)
		alert("La mano de obra es de: $" + mo + "\nLos gastos de fabricacion son de: $" + gf 
			+ "\nLos costos de produccion son: $" + CP
			+ "\nEl precio de venta es de: $" + (CP + (CP*.45)))
	break;
}
