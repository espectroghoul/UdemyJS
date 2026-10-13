let a = 'A';
let b = 'B';
let c = 'C';

// const numeros = [1, 2, 3];
// [a, b, c] = numeros
//cria um vetor com os valores b, c, a
const letras = [b, c, a]
//adiciona respectivamente os valores b, c, a nas variaveis a,b,c
//atribuição via desestruturalização
[a, b, c] = letras;

//esquerda variavel , direita seus respectivos valores
//[a, b, c] = [1, 2, 3];
//const numeros = [1, 2, 3];
console.log(letras);