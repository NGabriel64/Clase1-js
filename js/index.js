//Una variable es un espacio en memoria donde guardamos un dato; hay distintos tipos de datos.

//Hay tres tipos de variables: var, let y const. Pero var es obsoleto y trae problemas, así que a pesar de que se puede usar no lo vamos a usar. Entonces hay 2 tipos de variables: let y const.

//declaración de la variable:
let carlos;

//inicializar una variable:
carlos = `un nombre`;

//Ambos procesos se pueden hacer en simultáneo (en el caso de const es obligatorio):

let carla = `Carla`;

//¿Cuál es la diferencia entre let y const?

const nombre = `Facundo`;

let apellido = `Gimenez`;

console.log(apellido);

apellido = `Vega`

console.log(apellido)

/* nombre = `Lopez`; No se puede reinicializar una variable de tipo const */

console.log(nombre)

//const es constante, es decir valor de solo lectura.No puede cambiar de valor en la ejecución del código. Es el tipo de variable más utilizada; solo en caso de requerir una variable que vaya cambiando su valor varias veces usaremos let, así que en la mayoría de los casos será const. 

//string: cadena de caracteres, debe estar encerrada entre comillas, preferentemente backsticks.
const a1 = `Hola soy Camus y tengo 19 años`;

//Number.
const a2 = 20;

//booleanos: verdadero o falso.
const VoF = false;

//undefined: valor sin definir aún.
let sinDefinir = undefined;

//null: una variable de valor nulo a propósito.
const nulo = null;

//Objeto: una variable que tiene llaves y datos a los que accedemos a través de las llaves o keys. Se utilizan por lo general para modelar algo del mundo real como una entidad u objeto.

const user1 = {
    name:`Ana`,
    surname:`Graziano`,
    age: 25,
    password:1138,
    access: true,
}
console.log(user1.name)

//array es un arreglo, una colección de elementos de todo tipo a los que se accede por posiciones numéricas, SIEMPRE CONTANDO A PARTIR DE CERO.

const frutas = [`manzana`,`banana`,`pera`,`durazno`,40,null, undefined, true, user1]

console.log(frutas[1])

console.log(frutas[8].password)

console.log(frutas.length)

console.log(nombre.length)

console.log(nombre[0])



//OPERADORES
/* 
    Aritméticos
    suma: +
    resta: -
    multiplicación: *
    división: /
    módulo: % (entrega el resto de la división)
    decremento: --
    incremento: ++

    Asignación
    +=
    -=
    *=
    /=
    %=

    Not !: transforma false en true y viceversa

    Comparadores
    == igual?
    === estrictamente igual?
    != distinto?
    !== estrictamente distinto?
    > mayor que ...
    < menor que ...
    >= mayor o igual
    <= menor o igual

    Lógicos
    And: && si algo es falso, todo es falso
    Or: || si algo es verdadero, todo es verdadero

*/

console.log(21%2)

let n1 = 10
n1++
console.log(n1)

let n2 = 20
n2 += 10
console.log(n2)

let n3 = 10
let n4 = 5
let n5 = 20
console.log((n3+n4 == 15) && (n5/5 == 3))


//Tarea

const name = `Nestor`;
console.log(`Hola soy ${name}`);

let age = `59 años`;
console.log(`y tengo ${age}`);

const numeros = [5,10,15,20,25];
console.log(numeros [0]+numeros[4]);