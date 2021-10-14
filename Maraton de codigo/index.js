//Ejercicio 1
/*
let saludo = "Hola ";
let nombre = prompt("INGRESE SU NOMBRE");
let saludar = saludo + nombre;
console.log(saludar.toLocaleUpperCase());
console.log(saludar.toLocaleLowerCase());
*/
//Ejercicio 2
/*
let num1 = parseInt(prompt("INGRESE UN NUMERO"));
let num2 = parseInt(prompt("INGRESE OTRO NUMERO"));
let suma = num1 + num2;
console.log("El resultado de la suma es " + suma);
let resta = 0;
if ((resta = num1 > num2)) {
  console.log("El resultado de la resta es " + (num1 - num2));
} else if ((resta = num1 < num2)) {
  console.log("El resultado de la resta es " + (num2 - num1));
}
*/
//Ejercicio 3
/*
let texto = prompt("Ingrese texto");
let elegir = prompt(
  "Seleccione una opcion: 1: Mostrar por consola,  2: Mostrar por alert"
);
if (elegir === "1") {
  console.log(texto.toUpperCase());
} else if (elegir === "2") {
  alert(texto.toUpperCase());
}
*/
// Ejercicio 4
/*
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
let operacion;
operacion = parseInt(
  prompt(
    "¿Qué operación desea realizar? 1:Suma 2:Resta 3:Multiplicación 4:División 5:Potencia"
  )
);
switch (operacion) {
  case (operacion = 1):
    alert("Suma es igual a " + (numero1 + numero2));
    break;
  case (operacion = 2):
    alert("Resta es igual a " + (numero1 - numero2));
    break;
  case (operacion = 3):
    alert("Multiplicación es igual a " + numero1 * numero2);
    break;
  case (operacion = 4):
    alert("División es igual a " + numero1 / numero2);
    break;
  case (operacion = 5):
    alert("Potencia es igual a " + Math.pow(numero1, numero2));
    break;
}
*/
//Ejercicio 5
do{
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
let operacion;
operacion = parseInt(
  prompt(
    "¿Qué operación desea realizar? 1:Suma 2:Resta 3:Multiplicación 4:División 5:Potencia"
  )
);
switch (operacion) {
  case (operacion = 1):
    alert("Suma es igual a " + (numero1 + numero2));
    break;
  case (operacion = 2):
    alert("Resta es igual a " + (numero1 - numero2));
    break;
  case (operacion = 3):
    alert("Multiplicación es igual a " + numero1 * numero2);
    break;
  case (operacion = 4):
    alert("División es igual a " + numero1 / numero2);
    break;
  case (operacion = 5):
    alert("Potencia es igual a " + Math.pow(numero1, numero2));
    break;
}
 
let operacion2 = parseInt(
  prompt(
    "¿Que operacion desea realizar? | 0-Terminar | 1-Suma | 2-Resta | 3-Multiplicacion | 4-Division | 5-Potencia"
  )
);
do {
  let num1 = parseInt(prompt("Ingrese el primer numero"));
  let num2 = parseInt(prompt("Ingrese el segundo numero"));

  operacion2 = parseInt(
    prompt(
      "¿Que operacion desea realizar? | 0-Terminar | 1-Suma | 2-Resta | 3-Multiplicacion | 4-Division | 5-Potencia"
    )
  );
} 
while (operacion2 != 0)

// Ejercicio 6
/*
 var salir = 'n';
var alumnos = [];
hacer{
     let name = prompt ('ingresa el nombre de un alumno');
    if (nombre! = nulo) {
        alumnos.push (nombre);
    }
    var seguir = confirm ('desea ingresar mas alumnos')
    si (seguir == verdadero) {
        salir = 'y';
    }demás {
        salir = 'n';
    }
} mientras (salir! = 'n')
console.log (alumnos); 
*/

/* // Ejercicio 7
const nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];
para (sea i = 0; i <= nombres.length; i ++) {
    console.log (`Posicion: $ {i} valor de la posicion $ {nombres [i] [0] .toUpperCase ()}`);
} */

// Ejercicio 8
/* const mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];
for (sea i = 0; i <mascotas.length; i ++) {
    if (mascotas [i] == 'Gertrudis') {
        console.log ("Hay que vacunar contra la rabia |" + mascotas [i]);
         console.log ("Nombre Largo |" + mascotas [i]);
    } else if (mascotas [i] .length> 6) {
        console.log ("Nombre Largo |" + mascotas [i]);
    } else if (mascotas [i] .length <= 3) {
        console.log ("Nombre corto |" + mascotas [i]);
    } else if (mascotas [i] == 'Fido' || mascotas [i] == 'Gertrudis') {
        console.log ("Hay que vacunar contra la rabia |" + mascotas [i]);
    } else if (mascotas [i] == 'Tuerca') {
        console.log ("Entregar alimento balanceado |" + mascotas [i]);
    }
} */
/* // Ejercicio 9
restaurante constante = [25, 17, 18, 44, 12, 9, 36, 50];
var total = 0;
var comenzalesAdulto = 0;
var comenzalesJoven = 0;
para (sea i = 0; i <restaurant.length; i ++) {
    si (restaurante [i]> 18) {
        total + = 700;
        comenzalesAdulto ++;
    } más si (restaurante [i] <18) {
        total + = 450;
        comenzalesJoven ++;
    }
}
if (comenzalesAdulto> = 4) {
    var precioDescuento = total - (total * 0.10);
    console.log (`La cantidad de comenzales adultos es: $ {comenzalesAdulto}`);
    console.log (`La cantidad de comenzales joven es: $ {comenzalesJoven}`);
    console.log (`El total a pagar es: $ {precioDescuento}`);
} demás {
    console.log (`La cantidad de comenzales adultos es: $ {comenzalesAdulto}`);
    console.log (`La cantidad de comenzales joven es: $ {comenzalesJoven}`);
    console.log (`El total a pagar es: $ {total}`);
} */
// Ejercicio 10
/*

var  codigoPaciente  =  0 ;
var  calidadServicio  =  [ ] ;
var  turno  =  [ ] ;
var  pasarseVip  =  Boolean ;
var  pasarVipArray  =  [ ] ;
var  acumuladorVIP  =  0 ;
var  seguir  =  0 ;
hacer  {
    codigoPaciente  =  parseInt ( prompt ( "Ingresar codigo de paciente" ) ) ;
    if  ( codigoPaciente  > =  1  &&  codigoPaciente  <=  99 )  {
        let  servicio  =  parseInt ( prompt ( "¿Cómo valora la calidad de servicio? | 1 al 10" ) ) ;
        calidadServicio . empujar ( servicio ) ;
        turno . unshift ( codigoPaciente ) ;
        consola . log ( "Paciente VIP agregado al principio de la cola de turnos" ) ;
    }  else  if  ( codigoPaciente  > =  100  &&  codigoPaciente  <=  500 )  {
        turno . empujar ( codigoPaciente ) ;
        consola . log ( "Paciente agregado al final de la cola de turnos" ) ;

    }  else  if  ( codigoPaciente  > =  501  &&  codigoPaciente  <=  999 )  {
        pasarseVip  =  confirm ( "¿Desea pasarse un VIP?" )
        if  ( pasarseVip  ==  true )  {
            pasarVipArray . empujar ( codigoPaciente ) ;
            acumuladorVIP ++ ;
            turno . empujar ( codigoPaciente ) ;
            consola . log ( "Nuevo paciente agregado al VIP" )
        }  else  if  ( pasarseVip  ==  false )  {
            turno . empujar ( codigoPaciente ) ;
        }
    }  else  if  ( codigoPaciente  ==  0  ||  codigoPaciente  >  999 )  {
        alert ( "Codigo de paciente invalido!" ) ;
    }
    seguir  =  confirm ( "Desea agregar mas pacientes?" )
    si  ( seguir  ==  verdadero )  {
        seguir  =  1
    }  más  {
        vamos  suma  =  calidadServicio . reducir ( ( n ,  m )  =>  m  + =  n ) ;
        sea  promedio  =  suma  /  calidadServicio . longitud ;
        vamos a  maximo  =  calidadServicio . reducir ( ( n , m )  =>  Math . max ( n , m ) ,  - Número . POSITIVE_INFINITY ) ;
        vamos  minimo  =  calidadServicio . reducir ( ( n , m )  =>  Math . min ( n , m ) ,  Number . POSITIVE_INFINITY ) ;
        seguir  =  0 ;
        consola . log ( `Calidad de servicio de los VIP` ) ;
        consola . log ( `Promedio: $ { promedio } ` ) ;
        consola . log ( `Máximo: $ { máximo } ` ) ;
        consola . log ( `Minimo: $ { minimo } ` ) ;

        turno . ordenar ( ( a , b )  =>  a  -  b ) ;
        consola . log ( "Orden los turnos" ) ;
        consola . log ( turno ) ;

        consola . log ( `Cantidad de pacientes que se quieren pasar a VIP: $ { acumuladorVIP } ` ) ;
        consola . log ( ` $ { pasarVipArray } ` ) ;

    }
}
mientras  ( seguir  ! =  0 )
*/
