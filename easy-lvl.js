//Hacer un programa para ingresar un número y luego se emita por pantalla un
//cartel aclaratorio si “Es mayor a 10” o “No es mayor a 10”.
const  mayorA10 = (numero) => {
	if (10 > numero) {
		alert ("Es mayor a 10");
	}
	else {
		alert ("No es mayor a 10")
	}
}

//Hacer un programa para ingresar dos números distintos y luego se muestre por
//pantalla el menor de ellos.

const menorA = (a,b) => {
	if (a > b) {
		alert (`${b} es el menor`);
	}
}


//Hacer un programa para ingresar dos números y que luego emita por pantalla
//el mayor de ellos o un cartel aclaratorio "Son iguales" en el caso de que así sea.
//Nota:los números pueden ser iguales.

const mayorOIgual = (a,b) => {
	if (a > b) {
		alert (`${a} es el mayor`);
	}
	else  {
		alert ("son iguales")
	}
}


//Hacer un programa para ingresar un número y luego se emita un cartel por
//pantalla "Positivo" si el número es mayor a cero,"Negativo" si el número es
//menor a cero o "Cero" si el número es igual a cero.

const positivoONo = (numero) => {
 if (numero > 0) {
 	alert ("positivo");
 }
 else if (numero === 0) {
 	alert ("Cero");
 }
 else if (0 > numero){
 	alert ("Negativo");
 }
 else {
 	alert ("error");
 }
}


//Hacer un programa para ingresar un número y mostrar por pantalla un cartel
//aclaratorio si el mismo es PAR O IMPAR.

const parOImpar = (numero) => {

	if (numero === 0){
		alert ("es 0");
	}
	if (numero % 2 === 0){
		alert ("es Par");
	}
	else {
		alert ("es Impar");
	}
}



//Una casa de video juegos otorga un descuento dependiendo del importe de la
//compra realizada según los siguientes valores:
//  •Si el importe es menor a ARS 1000,no hay descuento.
//  •Si el importe es ARS 1000 o más pero menora ARS 5000,aplica un
//      descuento del 10%.
//  •Si el importe es ARS 5000 o más,aplica un descuento del 18%.
//Hacer un programa para ingresar un importe de venta y luego muestre por
//pantalla el importe final con el descuento que corresponda.

const descuento = (valor) =>{

	var porcentaje = 0;


	if (valor > 1000 && 5000 > valor) {
		porcentaje = 10;

		valorFinal = valor - ((valor * porcentaje) / 100 );

		alert (`El valor de su compra es de $${valor}, su descuento es del ${porcentaje}%, el valor final es de $${valorFinal}`);

	}
	else if (valor > 5000) {
		porcentaje = 18;

		valorFinal = valor - ((valor * porcentaje) / 100 );

		alert (`El valor de su compra es de $${valor}, su descuento es del ${porcentaje}%, el valor final es de $${valorFinal}`);
	}

	else {
		alert (`el valor final de su compra es de $${valor}`);
	}
	
}


//Hacer un programa para ingresar cuatro números distintos y luego mostrar por
//pantalla el mayor de ellos.
const mayorDeLos4 = (a,b,c,d) => {

	var mayor = -1000000000000000;

	numeros = [a,b,c,d];

	for (let i = 0; numeros.length > i; i++) {

		if (numeros[i] >= mayor) {

			mayor = numeros[i];
		}
			
	}
	alert (`el numero mayor es ${mayor}`);
}




//Hacer un programa para ingresar cuatro números distintosyluego mostrar por
//pantalla el menor de ellos.

const menorDeLos4 = (a,b,c,d) => {

	var menor = 100000000000000000;

	numeros = [a,b,c,d];

	for (let i = 0; numeros.length > i; i++) {

		if (menor >= numeros[i]) {

			menor = numeros[i];
		}	
	}
	alert (`el numero menor es ${menor}`);
}


//Hacer un programa para ingresar cinco números distintos y luego mostrar por
//pantalla el mayor y el menor de ellos.

const mayorYMenorDeLos5 = (a,b,c,d,e) => {

	var menor = 100000000000000000;

	numeros = [a,b,c,d,e];

	for (let i = 0; numeros.length > i; i++) {

		if (menor >= numeros[i]) {

			menor = numeros[i];
		}	
	}
	var mayor = -1000000000000000;

	for (let i = 0; numeros.length > i; i++) {

		if (numeros[i] >= mayor) {

			mayor = numeros[i];
		}
			
	}
	alert (`el numero mayor es ${mayor} y el menor es ${menor}`);
}



//Hacer un programa para ingresar cuatro números y luego mostrar por pantalla
//cuáles son mayores a 100.

const mayoresA100 = (a,b,c,d) =>{
	numeros = [a,b,c,d];
	mayores = [];
	for (i = 0; numeros.length > i ; i++) {
		if (numeros [i] > 100) {
			mayores.push (numeros[i]);
		}
	}
	alert (`los numeros mayores a 100 son: ${mayores}`);
}

//Hacer un programa para ingresar cuatro númerosyluego mostrar por pantalla
//cuántos son menores a 100.

const mayoresA100 = (a,b,c,d) =>{
	numeros = [a,b,c,d];
	mayores = [];
	for (i = 0; numeros.length > i ; i++) {
		if (numeros [i] > 100) {
			mayores.push (numeros[i]);
		}
	}
	alert (`los numeros mayores a 100 son: ${mayores}`);
}


//Hacer un programa para ingresar un valor que estará expresado en minutos.Si
//los minutos superan los 60,pasar el valorahoras,de lo contrario dejarlo en
//minutos.Mostrar el resultado en pantalla aclarando si se muestran minutosu
//horas.

const convertirAMin = (minutos) => {
	var valorMinutos = minutos

	var horas = 0;

	if (valorMinutos == 60){

		document.write ("resultado: 1 hs");
	}
	if (valorMinutos < 60 ) {

		document.write (`resultado: ${valorMinutos} minutos`);
	}
	else {

	while (valorMinutos >= 60) {

		
		 if (valorMinutos >= 60) {

	 		valorMinutos -= 60;
	 		horas++;
	 
			
	}
		
	}
	document.write (`resultado: ${horas} hs y ${valorMinutos} min`);
	}
}
