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


// Hacer un programa que solicite el ingreso de un número y que luego emita un
//  cartel por pantalla aclarando si el mismo es múltiplo de 5.

const multiploDe5 = (numero) => {
	if (numero === 0) {
		alert ("es 0")
	}
	if (numero  % 5 === 0) {
		alert ("Es multiplo de 5");
	}
	else {
		alert ("No es multiplo de 5");
	}
}

// Hacer un programa que solicite el ingreso de dos números y luego calcular:
//      a.La resta si el primero es mayor que el segundo.
//      b.La suma si son iguales.
//      c.El producto si el primero es menor.
//  Se deberá emitir un cartel por pantalla con el resultado correspondiente.

const operacionesSegun = (a,b) => {
	
	var final = null;

	if (a > b) {
		final = a - b;
	}
	if (a === b) {
		final = a + b;
	}
	if (b > a) {
		final = a * b;
	}
	alert (`el resultado es ${final}`)
}

// Hacer un programa para ingresar dos números.Si el segundo es distinto de
//  cero, calcular la división del primero por el segundo y mostrar el resultado por
//  pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
//  cero.

const division = (a,b) => {
	final = null;
	if (b != 0){
		final = a / b;
		alert (`El resultado es ${final}`);
	}
	else {
		alert ("no se puede dividir por 0");
	}
}

// Un importante negocio de desinfectante líquido realiza descuentos
//  dependiendo de la cantidad de litros vendidos según la siguiente escala:
//      a. Si vende menos de 100 litros, no hay descuento.
//      b. Si vende entre 101 y 300 litros, el descuento es del 10%.
//      c. Si vende entre 301 y 500 litros, el descuento es del 15%.
//      d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
//  Hacer un programa que solicite el ingreso del importe total de la venta y la
//  cantidad de litros vendidos, calcule y emita el importe con el descuento
//  aplicado.

const descuentoPor = (precio, litros) => {
 
	if (101 > litros) {
		alert (`usted compro ${litros} litros, el valor de su compra es ${precio}`);
	}
	else {
		
		if (litros > 100 && 301 > litros) {
			porcentaje = 10;
		}
		if (litros > 300 && 501 > litros) {
			porcentaje = 15;
		}
		if (litros > 500) {
			porcentaje = 25;
		}

		importTotal = precio - ((precio * porcentaje) / 100 );

	 alert (`usted compro ${litros} litros, el valor de su compra es ${importTotal}`);
	}
}

// Hacer un programa que solicite el ingreso de las notas del primer parcial y del
//  segundo parcial de una alumna de programación.El programa deberá analizar
//  las notas y emitir la situación de la alumna según la siguiente escala:
//      a. Si tiene 8 o más en ambos parciales,emitir "aprobación directa".
//      b. Si no tiene 8 o más en ambos pero tiene aprobados ambos parciales (se
//          aprueba con 6 o más), emitir "rinde examen final".
//      c. Si tiene menos de 6 en alguno de los dos parciales, emitir "debe
//          recuperar".
//  El programa debe emitir solo un cartel, el que corresponda.

const estatusDeAlumno = (a,b) =>{
	if (6 > a || 6 > b) {
		alert ("debe recuperar");
	}
	if (a > 7 && b > 7) {
		alert ("aprobacion directa");
	}
	else {
		alert ("rinde examen final");
	}
}

// Hacer un programa para ingresar por teclado la longitud de los tres lados de un
// triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo
//  de triángulo corresponde:
//      a. Equilátero: cuando los tres lados sean iguales.
//      b. Isósceles: cuando dos de los tres lados sean iguales.
//      c. Escaleno: cuando todos los lados sean distintos.

const definirTriangulo = (a,b,c) =>{

	 if (a === b && a === c) {
	 	alert ("es un triángulo equilátero");
	 }
	 if (a === b || a === c || b === c) {
	 	alert ("es un triangulo Isósceles");
	 }
	 else {
	 	alert ("es un triangulo Escaleno");
	 }

}

//Hacer un programa para ingresar 4 números. Luego analizar e informar por
//pantalla si los mismos se encuentran ordenados de forma decreciente.

const ordenados = (a,b,c,d) => {
	if (a > b && b > c && c > d){
		alert ("estan ordenados en forma decreciente");
	}
	else {
		alert ("no estan ordenados de forma decreciente");
	}
}

//El negocio de desinfectante antes mencionado vende además detergente
//suelto, y los precios se aplican según la siguiente escala:
//   a. 25 ARS por litro los primeros 50 litros.
//   b. 20 ARS por litro si la venta es de 51 a 200 litros.
//   c. 15 ARS por litro si la venta es de 201 a 500 litros.
//   d. 10 ARS por litro si la venta es de más de 500 litros.
//Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.
//Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago
//(ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule
//y emita por pantalla el monto final a abonar por el cliente.

const valorLitro = (litros) =>{
	let pago = prompt (`si abona en efectivo ingrese "1" de lo contrario ingrese "0"`); 
	if (51 > litros){
		precioLitro = 25;
	}
	if (201 > litros){
		precioLitro = 20;
	}
	if (501 > litros){
		precioLitro = 15;
	}
	if (litros > 500){
		precioLitro = 10;
	}
	else if (pago === 1){

	}
	precioFinal = 
}

//Hacer un programa que solicite cuatro números y emitir un cartel aclaratorio si
//son todos iguales entre sí, caso contrario, no emitir nada.

const iguales4 = (a,b,c,d) => {
	if (a === b && b === c && c === d) {
		alert ("son todos iguales entre si");
	}
}

//Hacer un programa para ingresar tres números y luego mostrarlos ordenados
//de menor a mayor.

const menorAMayor = (a,b,c) => {
	let numeros = [a,b,c];
 	numeros.sort((a,b) => {
 		return a - b
 	} );  
 	alert (numeros);
}
//Hacer un programa para ingresar tres números y emitir un cartel aclaratorio si
//la suma de los dos primeros es mayor al producto del segundo con el tercero.

const elMayor = (a,b,c) =>{
if ((a + b) > (b * c)){
	alert ("la suma del 1er y 2do numero es mayor a la multiplicacion del 2do con el 3ro")
}
}