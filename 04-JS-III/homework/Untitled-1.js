



function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (let i = 0; i < array.length; i++){
      var item = array[i];
      if (elemento === item) return true;
    }  
    return false
    //return array.includes(elemento);
  }
   let array = [1, 2, 3, 4]
    console.log(arrayContiene(array,8))


    function multiplicar (array) {
        return array.reduce((acc, curr)=> acc * curr)
    }
    console.log(multiplicar(array));

    function agregarNumeros(numeros) {
        // "numeros" debe ser un arreglo de enteros (int/integers)
        // Suma todos los enteros y devuelve el valor
        // Tu código:
        return numeros.reduce((a, b) => a + b);
      }

console.log(agregarNumeros(array))


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var palabranueva = ""
    for (i = 0; i < palabras.length; i++){
        if (i === 0) palabranueva = palabranueva + palabras[i]
        else palabranueva = palabranueva + " " + palabras[i]
    }
    return palabranueva
  }

  let palabras = ["Luis", "Enrique", "Benitez", "Hola"];

  console.log(dePalabrasAFrase(palabras)=== "Luis Enrique Benitez Hola")


  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array
  }

  console.log(agregarItemAlComienzoDelArray(palabras,1))

  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
      return array[array.length-1];
    
  }
  console.log(devolverUltimoElemento(palabras))


  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (i = 0; i < array.length; i++ ) {
       array[i]++;
    }
       return array
    
  }
  console.log(incrementarPorUno(array))



  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    return agregarNumeros(resultadosTest)/resultadosTest.length

  }
  console.log(promedioResultadosTest(array))

  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:

    return Math.max.apply(null, numeros);
 
  }

  console.log(numeroMasGrande(array))


  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    var acc = 1
    for (let i =0; i < arguments.length; i++) {
        acc = acc * arguments[i];
    }
    return acc
}

console.log(multiplicarArgumentos(1,4,7,1,2))

let nums = [20 , 40, 10, 11, 18, 50, 1]

function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    var count = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) count = count + 1; 
     
  } 
  return count
  }

  console.log(cuentoElementos(nums))

  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if (numeroDeDia === 7 || numeroDeDia === 1) {
        return "Es fin de semana"
    }
    else return "Es dia Laboral";
  } 

  console.log(diaDeLaSemana())

  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let nString = String(n)
    return nString.startsWith("9")
  }

  
  console.log(empiezaConNueve(96))


  const mixedTypedArray = [100, true, 'freeCodeCamp', {}]; 

  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
        // let a = arreglo.length[i]
        // let b = arreglo.length[(i + 1)]
        // for (let i = 0; i < arreglo.length; i++) {
        //     new Array(a,b)
        //     if (a === b) return true
        // } 
        //  return false
   

        
    }
    

  console.log(todosIguales(array))