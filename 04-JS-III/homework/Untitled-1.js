



// function arrayContiene(array, elemento) {
//     // Comprueba si el elemento existe dentro de "array"
//     // Devuelve "true" si está, o "false" si no está
//     // Tu código:
//     for (let i = 0; i < array.length; i++){
//       var item = array[i];
//       if (elemento === item) return true;
//     }  
//     return false
//     //return array.includes(elemento);
//   }
//    let array = [1, 2, 3, 4]
//     console.log(arrayContiene(array,8))

const { straightThroughStringTask } = require("simple-git/src/lib/tasks/task");


//     function multiplicar (array) {
//         return array.reduce((acc, curr)=> acc * curr)
//     }
//     console.log(multiplicar(array));

//     function agregarNumeros(numeros) {
//         // "numeros" debe ser un arreglo de enteros (int/integers)
//         // Suma todos los enteros y devuelve el valor
//         // Tu código:
//         return numeros.reduce((a, b) => a + b);
//       }

// console.log(agregarNumeros(array))


// function dePalabrasAFrase(palabras) {
//     // "palabras" es un array de strings/cadenas
//     // Devuelve un string donde todas las palabras estén concatenadas
//     // con espacios entre cada palabra
//     // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//     // Tu código:
//     var palabranueva = ""
//     for (i = 0; i < palabras.length; i++){
//         if (i === 0) palabranueva = palabranueva + palabras[i]
//         else palabranueva = palabranueva + " " + palabras[i]
//     }
//     return palabranueva
//   }

//   let palabras = ["Luis", "Enrique", "Benitez", "Hola"];

//   console.log(dePalabrasAFrase(palabras)=== "Luis Enrique Benitez Hola")


//   function agregarItemAlComienzoDelArray(array, elemento) {
//     // Añade el "elemento" al comienzo del array
//     // y devuelve el array
//     // Pista: usa el método `.unshift`
//     // Tu código:
//     array.unshift(elemento);
//     return array
//   }

//   console.log(agregarItemAlComienzoDelArray(palabras,1))

//   function devolverUltimoElemento(array) {
//     // Devuelve el último elemento de un array
//     // Tu código:
//       return array[array.length-1];
    
//   }
//   console.log(devolverUltimoElemento(palabras))


//   function incrementarPorUno(array) {
//     // "array" debe ser una matriz de enteros (int/integers)
//     // Aumenta cada entero por 1
//     // y devuelve el array
//     // Tu código:
//     for (i = 0; i < array.length; i++ ) {
//        array[i]++;
//     }
//        return array
    
//   }
//   console.log(incrementarPorUno(array))



//   function promedioResultadosTest(resultadosTest) {
//     // "resultadosTest" debe ser una matriz de enteros (int/integers)
//     // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
//     // Tu código:
//     return agregarNumeros(resultadosTest)/resultadosTest.length

//   }
//   console.log(promedioResultadosTest(array))

//   function numeroMasGrande(numeros) {
//     // "numeros" debe ser una matriz de enteros (int/integers)
//     // Devuelve el número más grande
//     // Tu código:

//     return Math.max.apply(null, numeros);
 
//   }

//   console.log(numeroMasGrande(array))


//   function multiplicarArgumentos() {
//     // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
//     // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
//     // Escribe tu código aquí:
//     var acc = 1
//     for (let i =0; i < arguments.length; i++) {
//         acc = acc * arguments[i];
//     }
//     return acc
// }

// console.log(multiplicarArgumentos(1,4,7,1,2))

// let nums = [20 , 40, 10, 11, 18, 50, 1]

// function cuentoElementos(arreglo){
//     //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
//     //Escribe tu código aquí
//     var count = 0
//   for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] > 18) count = count + 1; 
     
//   } 
//   return count
//   }

//   console.log(cuentoElementos(nums))

//   function diaDeLaSemana(numeroDeDia) {
//     //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
//     //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//     //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
//     //Escribe tu código aquí   
//     if (numeroDeDia === 7 || numeroDeDia === 1) {
//         return "Es fin de semana"
//     }
//     else return "Es dia Laboral";
//   } 

//   console.log(diaDeLaSemana())

//   function empiezaConNueve(n) {
//     //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//     //inicia con 9 y false en otro caso.
//     //Escribe tu código aquí
//     let nString = String(n)
//     return nString.startsWith("9")
//   }

  
//   console.log(empiezaConNueve(96))
  


//   const mixedTypedArray = [100, true, 'freeCodeCamp', {}]; 

    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
      // for (let i = 0; i < arreglo.length; i++) {
      //      arrCopy = [];
      //      arrCopy.push[i];
      //      if (arrCopy[i + 1] === arreglo[i]); return true
      // } 
      // return false
      // for (let i = 0; i < arreglo.length; i++){
      //   if (devolverUltimoElemento(arreglo));
      // return 
      // }
      // const arreglo => arreglo.every(valor => valor === arreglo[0]);
      // return  false
      // alumnos.forEach(function(elemento, indice) {
      //   if (elemento === alumnos.slice[1]) {}
      //   return true; 
      // });
        
      
      // return false;
      var alumnos = ["luis","luis","luis"]
  function todosIguales(arreglo) {
      for (let i = 0; i < arreglo.length; i++) {
          for (let j = 1; j < arreglo.length; j++) {
            if (arreglo[i] === arreglo[j]) {
              return true;
            } return false
          }  
      } 
      
  }

  console.log(todosIguales(alumnos))

//   console.log(todosIguales(mixedTypedArray))


//   function crearGato (nombre, edad) {
//     // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
//     // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
//     // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
//     // Devuelve el objeto
//     // Tu código: 

//   }


//   console.log(crearGato())

//  function equal(arr){
//   const equal = arr => arr.every(val => val === arr[0]);
//  } 

//   console.log(equal(mixedTypedArray));




//   function crearGato (nombre, edad) {
//     // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
//     // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
//     // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
//     // Devuelve el objeto
//     // Tu código:
//     // var gato = {
//     // nombre: "Luis",
//     // edad: "edad",
//     // meow: function () {
//     //   return "Meow!";
//     // }
//     const Gato = new Object();
//     Gato.name = "name";
//     Gato.edad = "edad";
//     Gato.meow = function() {
//       return "Meow!"
//     }
//   }
 
// console.log(Gato.meow())

// function agregarPropiedad (objeto, property) {
//   // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
//   // Devuelve el objeto
//   // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
//   // Tu código:
//   const objeto = new Object ();
//   argumento.this = null;
//   return objeto
// }

// console.log(agregarPropiedad( objeto, saludar))

//  const person = {
//   nombre: "Luis",
//   edad: 27,
//   Saludo: function() {
//     console.log("Hola, soy " + this.nombre);
//   }  
// }
// console.log(person.Saludo)

// console.log(Saludo())


// const person = new Object ();
// person.name = "luis";
// person.edad = 27;
// person.Saludo = function() {
//   console.log("Hola soy "+ this.name)
// }
// console.log(person.Saludo())

// function Saludo() {
//   console.log("Hola soy "+ this.name)
// }
// console.log(person.edad);

// // var objeto = {
// //   name: "Melisa",
// //   edad: 13,
// //   getEdad: function() {
// //     return this.edad * 2;
  
// //   },
// //   saludo: Saludo
// // }
// // console.log(objeto.getEdad());

// // console.log(objeto.saludo());

// // var boris = {
// //   nombre: "boris",
// //   edad: 27,
// //   curso: "ft"
// // }
// // var luis = {
// //   nombre: "Luis",
// //   edad: 27,
// //   curso: "pt"
// // }

// // console.log(luis.curso)
// // DEFINIR CLASES E INSTANCIAS

// // Constructors & new

// function Persona() {
//   this.name = "Luis";
//   this.lastname = "Benitez";
//   this.edad = 27
//   this.altura = 1.55
//   this.pesokilos = 51
// }

// var luis = new Persona();
// var juan = new Persona();
// var melisa = new Persona();

// melisa.name = "Melisa"
// melisa.lastname = "Serrano"
// juan.name = "Juan";
// juan.lastname = "Perez";
// juan.edad = 30;

// // console.log(melisa)

// function Person (name, lastname, edad, altura, pesokilos, profesion) {
//   this.name = name || "Luis";
//   this.lastname = lastname || "Benitez";
//   this.edad = edad || 27;
//   this.altura = altura;
//   this.pesokilos = pesokilos;
//   this.profesion = profesion;
// }

// var melisa = new Person("Melisa", "Serrano", 27, 1.55, 50, "Artista");

// console.log(melisa)

// var luis = new Person("Luis", "Benitez", 27, 167, 67, "Coder");
// console.log(luis)

// var nuevo = new Person();
// console.log(nuevo)

// console.log(melisa.__proto__)
// console.log(luis.__proto__)

//PROTOTYPE

// function Persona(edad) {
//   this.edad = edad;
// }

// Persona.prototype.getEdad = function() {
//   return this.edad;
// }

// var obj = new Persona(22);
// var obj2 = new Persona(34);
// var obj3 = new Persona (213124);


// console.log(obj2.getEdad)
// obj
// obj3.getEdad = function() {
//   return this.edad / 2;
// }

// console.log(obj.getEdad())

// Object


// var Persona = {
//   edad: "20",
//   getEdad: function getEdad(){
//     return this.edad;
//   }
// }

// var juan = Object.create(Persona);
//  console.log(juan.getEdad())


//ESA6 class

// class Persona {
//   constructor (nombre, apellido) {
//     this.nombre = nombre,
//     this.apellido = apellido
//   }

//   getNombre() {
//     return this.nombre
//   }
//   saludar() {
//     return 'Hola!, soy '+ this.nombre;
//   }

// }

// var luis = new Persona('Luis', 'Benitez');

// console.log(luis.saludar())


// class Empleado extends Persona {
//   constructor (nombre, apellido, empleo, sueldo){
//     super(nombre, apellido);
//     this.empleo = empleo;
//     this.sueldo = sueldo;
//   }
// }

// var toni =  new Empleado("Toni", "Tralice", "Profesor", 100);
// console.log(toni)

// CALLBACKS

function decirHolaUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function decirAdiosUsuario(usuario) {
  return "Adios " + usuario + "!";
}
 function crearSaludo (usuario, cb) {
  return cb(usuario);
 }

 console.log(crearSaludo("Luis",decirHolaUsuario))



  // forEach

 

  alumnos.forEach(function(elemento, indice) {
      if (elemento === alumnos.map) {
        return true;
      };
    })
    

  //// Map


// reduce
var arrayReduce = alumnos.reduce(function(acc, elemento) {
  return acc === elemento;
});

//// 

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}
console.log(mayuscula("luis"))
console.log(mayuscula("melisa"))