const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador = acumulador + valor;
//     console.log(acumulador, valor);
//     return acumulador;
// }, 0);
//evite colocar return dentro do if 
// ao inves disso modifique o valor dentro do if e o retorne ao final da estrutura de loop
//não faça isso com reduce, ele não foi feito pra isso
// const pares = numeros.reduce( (acumulador, valor) => {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, [])
// console.log(pares);
//console.log(total);

//esse também não pode
// const dobrado = numeros.reduce((acc, valor) => {
//     acc.push(valor * 2);
//     return acc;
// }, [])
// console.log(dobrado)


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];

const maisVelha = pessoas.reduce((acc, obj) => {
    if(acc.idade > obj.idade) return acc;
    return obj;
})

console.log(maisVelha)
