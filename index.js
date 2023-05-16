// let i = 0
// while (i < 10){
//     console.log(i)

//     i++
//     //
//     i++ igual a i = i + 1
// }

// let numero;
// let somatorio = 0;
// while(numero!==0){
//     numero = Number(prompt("Digite um numero"))
//     somatorio = somatorio + numero
//     // ou somatorio +=numero
// }
// console.log(somatorio);

// const numeros = [10, 42, 53, 68, 87]
// console.log(numeros[0])
// for(let i = 0;i < numeros.length;i++){
//     console.log(numeros[i])
// }

const numeros = [11, 15, 18, 14, 12, 13];

function devolverMaiorNumero(array) {
  let maiorNumero = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}
const maiorNumeroArray = devolverMaiorNumero(numeros);
console.log("O maior numero é", maiorNumeroArray);
