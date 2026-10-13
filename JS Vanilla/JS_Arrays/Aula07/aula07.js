const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];
//Para filter o que você retorna é true ou false, true para adicionar e false para não adicionar
const numerosPares = numeros
//se a condição do retorno do filter for true ele adiciona o numero no array, quando a arrow function só tem uma linha você não precisa colocar return
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acc, valor) => acc+= valor);
console.log(numerosPares);