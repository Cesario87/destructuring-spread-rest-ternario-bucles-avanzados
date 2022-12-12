//1. Ejercicios destructuring
//Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
//1.1 Extrae la empleada Ana completa
//{"name":"Ana", "email":"Ana@gmail.com"}
let ana = empleados[1];
//const {name, email} = ana;
console.log(name, email);

//1.2 Extrae el email del empleado Luis --> Luis@gmail.com

let luis = empleados[0]
//let {email} = luis // = empleados[0].email
console.log(email)


//2.1-Usa destructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;

/* Al final
let a = 3;
let b = 5;*/

{a= 3, b= 5};
console.log(a, b);

//3.1-Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

// asignar nuevos nombres de variable

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES

console.log(maximaHoy); 
console.log(maximaManana); 


//2. Ejercicios spread/rest
//2.1 Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
const sumEveryOther() = {

}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26