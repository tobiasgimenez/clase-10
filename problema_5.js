/* DATOS
Juan tiene que conducir 2.6 km desde su pueblo a Toledo
Desde una tienda hasta la casa de su tio hay una distancia de 691m
Expresar la distancia total recorrida en mm
*/

var distanciaToledo = 2.6; // Kilometros
var distanciaCasaTio = 691; // Metros
var distanciaTotalMts = (distanciaToledo*100) + distanciaCasaTio;
var distanciaTotalMilimetros = distanciaTotalMts * 100;

console.log("Cantidad de mm recorridos"+"mm"+distanciaTotalMilimetros);