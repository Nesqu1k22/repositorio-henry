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
<<<<<<< HEAD:archivo-prueba.js


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
=======
>>>>>>> 7d6a8a9f4bb0fc872abe0543d4c22d7bde81a17a:easy-lvl.js

// Hacer un programa que solicite el ingreso de 10 números y que muestre el
//  mayor de ellos por pantalla.Solo se debe emitir UN valor por pantalla.

 const mayorDe10 = (a,b,c,d,e,f,g,h,i,j) =>{
 	let numeros = [a,b,c,d,e,f,g,h,i,j];
 	var a = 0;
 	for (i = 0; numeros.length > i; i++){
 		if (numeros [i] > a) {
 			a = numeros [i];
 		}
 	}
 	alert (`el numero mayor es ${a}`);
 }


// Hacer un programa que solicite 20 números y calcule y emita por pantalla
//  cuántos son positivos (mayores a cero). Se debe mostrar un solo valor: el
//  conteo final.

const losPositivos = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) => {
	var numeros = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t];
	var positivos = 0;
	for (i = 0; numeros.length > i; i++) {
		if (numeros [i] > 0) {
			positivos += 1;
		}
	}
	alert (`hay un total de ${positivos} positivos`)
}

// Hacer un programa para mostrar los números del 1 al 10. No se debe realizar
//  ningún pedido de datos.

const del1Al10 = () => {
	var numeros = [1,2,3,4,5,6,7,8,9,10];
	alert (`${numeros}`);
}

// Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
//  ningún pedido de datos.

const del10Al1 = () => {
	var numeros = [10,9,8,7,6,5,4,3,2,1];
	alert (`${numeros}`);
}

// Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
//  0,5,10,15,20 .... 100.

const de5Al100 = () => {
	var a = -5;
	while (100 > a){
		a += 5;
		alert (`${a}`);
	}
}

// Hacer un programa que solicite UN número y luego calcule y emita un cartel
//  aclaratorio si el mismo es primo o no es primo.
//  Nota:un numero es primo cuando es divisible únicamente por 1 y por sí
//  mismo.

const Esprimo = (numero) => { 
var primo = true

	if ( numero === 2 || numero === 3 || numero === 5 || numero === 7) {
		return primo;
	}

	else {

		for (let i = 2; i <= 10; i++){
	    		 
	     	if ( numero === 1 || numero === 0 || (numero % i) === 0){
	     		 	var primo = false;
	     	}
	    }
	    
	    return primo;
	}
}

// Hacer un programa que solicite 10 números y luego mostrar por pantalla el
//  máximo de ellos y la posición en la que fue ingresado.

const encontrarMayor = () => {
	var n = prompt ("ingrese el 1er numero")
	var p = 0;
	for (i = 2; i < 11; i++) {
		var x = prompt (`ingrese el ${i} valor`);
		if ( n < x){
			var n = x;
			var p = i;
		}
	}
	alert (`el mayor de los 10 es el numero ${n} en la posicion Nº ${p}`);
}


// Hacer un programa que solicite 20 números y luego mostrar por pantalla el
//  menor de ellos y la posición en la que fue encontrado.

const encontrarMenor = () => {
	var n = prompt ("ingrese el 1er numero");
	var p = 0;
	for (i = 2; i < 21; i++) {
		var x = prompt (`ingrese el ${i} valor`);
		if (n > x){
			var n = x;
			var p = i;
		}
	}
	alert (`el menor de los 20 es el numero ${n} en la posicion Nº ${p}`);
}


// Hacer un programa que solicite 20 edades y luego calcule el promedio de edad
//  de aquellas personas mayores a 18 años.

const promedioDeEdad = () => {
	mayores = 0;
	var a = 0;
	
	for (i = 0; i < 20; i++) {
		let edad = parseInt(prompt ("ingrese la edad"));
		if (18 < edad) {
			mayores = edad + mayores;
			a++; 
		}
	}
	let p = mayores / a;
	alert (`el numero promedio de edades correspondientes a los mayores de 18 años es de ${p}`)
}

// Hacer un programa que solicite 20 números y luego emitir por pantalla el
//  máximo de los números pares y el mínimo de los números impares.

const maxParMinImp = () => {
	var a = false;
	var b = false;
	for (i = 0; i < 20; i++){
		let num = parseInt(prompt ("ingrese el numero"));
		if (num % 2 === 0 && num > a) {
			a = num;
		}
		if (num % 2 !== 0 && num < b) {
			b = num;
		}

	}
	alert (`el maximo de los pares es ${a} y el minimo de los impares es ${b}`)
}

// Hacer un programa para ingresar 10 números y luego calcule y emita el mayor
//  de los primos de la lista. En caso de no haber ningún número primo, deberá
//  aclararlo con un cartel.

const primoMayor = () => { 
	var a = false;
	for (i = 0; i < 10; i++){
		var num = parseInt(prompt ("ingrese el numero"));
		var b = Esprimo (num);
		if (b === true && num > a){
			a = num;
		}
	}
	if (a !== false) {
				alert (`el mayor numero primo es ${a}`);
			}
			else {
				alert ("no hay numeros primos")
			}
}

// Hacer un programa para mostrar los números del 1 al 10. No se debe realizar
// ningún pedido de datos.USANDO WHILE.

const de1A10 = () =>{
	var numeros = [];
	let i = 0;
	while (i < 10) {
		numeros [i] = i + 1; 
		i++;
	}
	alert (`${numeros}`);
}

// Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
// ningún pedido de datos.USANDO WHILE.



// Hacer un programa que solicite la edad de un grupo de personas.El programa
// deberá pedir edades hasta que se ingrese una edad menora18 años.Deberá
// mostrar por pantalla cuántas personas mayores se registraron.

const de10A1 = () =>{
	var numeros = [];
	let i = 0;
	while (i < 10) {
		numeros [i] = 10 - i; 
		i++;
	}
	alert (`${numeros}`);
}

// Hacer un programa que solicite dos números y luego muestre los números
// entre el menor y el mayor de ellos.Acordate,usando While.

const entre2 = () =>{
	 numeros = [];
	let e = 0;
	let a = parseInt(prompt("ingrese el 1er numero"));
	let b = parseInt(prompt("ingrese el 2do numero"));
	while ((a - 1) > b) {
		b++
		numeros[e] = b;
		e++;
	}	
	while ((b - 1) > a) {
		a++
		numeros[e] = a;
		e++;
	}	
	alert (`${numeros}`)
}


// Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
// 0,5,10,15,20 .... 100. Usando While.

const mas5 = () => {
	let a = 101;
	var b = 0;
	let c = 0;
	numeros = [];
	while (a > b) {
		numeros[c] = b;
		b += 5;
		c++;
	}
	alert (`${numeros}`)
}  

// Hacer un programa que solicite UN número y luego calcule y emita un cartel
// aclaratorio si el mismo es primo o no es primo.
// Nota:usando While.Ya lo hicimos con FOR,ahora con While.

const esPrimoWhile = () => {
	let a = 0;
	let i = 2;
	const num = parseInt(prompt("ingrese el valor"));
	
	if (num === 0 || num === 1){
		alert ("El numero no es primo");
	}
	else {
		while (i < num){
			if (num % i === 0){
				a = a + 1;
				i = i + 1;
			}
			else {
				i++;
			}
		}
	if (a > 0) {
			alert ("El numero no es primo");
	}
	else {
			alert ("el numero es primo");
	}
	}
}

// Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego mostrar por pantalla el máximo de ellos y la posición
// en la que fue ingresado.

const maxHasta0 = () => {

let contador = 0;
var max = 0;
var pos = 0;
do {
	var numero = parseInt(prompt ("ingrese un numero"));
	
	if (numero > max){
		max = numero;
		pos = contador;
		contador++;
	}
	else {
		contador++;
	}
}
while (numero !== 0)
alert (`el numero con el maximo valor es ${max} y fue ingresado en la posicion Nº ${pos}`);
}

// Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego mostrar por pantalla el menor y el segundo menor.

const minimosHasta0 = () => {

var min = null;
var min2 = null;
while (numero !== 0) {
	var numero = parseInt(prompt ("ingrese un numero"));
	if (numero < min && numero < min2){
		min2 = min;
		min = numero;
	}
	else if (numero < min2) {
		min2 = numero;
	}
}
alert (`los numeros con el minimo valor son ${min} y el que le sigue ${min2}`);
}

// Realizar el nuevamente el ejercicio 8 pero ahora debe devolver además la
// posición en la que fue encontrado cada uno de los mínimos.

const minimosPosHasta0 = () => {

let contador = 1;
var pos1 = 0;
var pos2 = 0;
var min = null;
var min2 = null;
while (numero !== 0) {
	var numero = parseInt(prompt ("ingrese un numero"));
	if (numero < min && numero < min2){
		min2 = min;
		min = numero;
		pos1 = contador;
	}
	else if (numero < min2) {
		min2 = numero;
		pos2 = contador;
	}
	contador++;
}
alert (`los numeros con el minimo valor son ${min} ingresado en la posicion ${pos1} y el que le sigue ${min2} encontrado en la posicion ${pos2}`);
}

// Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego emitir por pantalla el máximo de los números
// negativos y el mínimo de los números positivos.

const minimosYMaxHasta0 = () => {

var minPos = null;
var maxNeg = null;
while (numero !== 0) {
	var numero = parseInt(prompt ("ingrese un numero"));
	if (numero < minPos && numero > 0){
		minPos = numero;
	}
	else if (numero > maxNeg && numero < 0) {
		maxNeg = numero;
 	}
}
alert (`el numero con el minimo valor positivos es ${minPos}  y el numero con el maximo valor negativo es ${minNeg}`);
}


// Hacer un programa para ingresar una lista de números que corta cuando se
// ingresa un cero y luego mostrar: la cantidad de números primos, la cantidad de
// números pares, la cantidad de positivos y la cantidad de negativos.