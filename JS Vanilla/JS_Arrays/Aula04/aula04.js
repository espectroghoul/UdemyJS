//Filter, map, reduce

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosMaiores = [];
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 10) {
        numerosMaiores.push(numeros[i]);
    }
}
function callbackFilter(valor, indice, array) {
    //de prefencia a fazer dessa forma ao inves do forma abaixo
    return valor > 10;
    // if(valor > 10) {
    //     return true
    // } else {
    //     return false;
    // }
}
//const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados = numeros.filter( valor => valor > 10 );
//console.log(numerosFiltrados)


/*
    Retorne as pessoas que tem o nome com 5 letras ou mais
    Retorne as pessoas com mais de 50 anos
    Retorne as pessoas cujo nome termina com a
*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const idoso = pessoas.filter(obj => obj.idade > 50);
const terminadoA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeGrande);
console.log(idoso);
console.log(terminadoA);