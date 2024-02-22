// function unique(iterable) {
//   // strings
//   const result = []
//   if (typeof iterable === 'object') iterable = iterable.join('')
//   iterable.split("").map((element) => {
//     if (result[result.length-1] !== element) {
//       return result.push(element)
//     }
//   });
//   return result
// }

function unique(arr) {
  let resultados = [];
  let ultimoElemento = null;
  
  for (let elemento of arr) {
      if (elemento !== ultimoElemento) {
          resultados.push(elemento);
          ultimoElemento = elemento;
      }
  }
  
  return resultados;
}

console.log(unique("AAAABBBCCDAABBB"))
console.log(unique('ABBCcAD'))
console.log(unique([1,2,2,3,3]))

