//REMOVENDO ELEMENTOS DO ARRAY
const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();
//remover do final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
//remover do inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);
//remover do meio
//sendo o primeiro numero é a posição e o segundo a quantida que quer q remova
const meio = numeros.splice(1,3);
console.log(meio);
console.log(numeros);

