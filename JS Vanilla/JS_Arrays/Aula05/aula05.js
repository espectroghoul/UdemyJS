const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobrados = numeros.map(valor=> valor * 2)

console.log(dobrados)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
const nome = pessoas.map(valor => valor.nome);
// os parenteses diz para o js que aquilo é uma expressão a ser resolvida dessa forma você evita o erro da falta do return
// do mesmo jeito que a condição dentro de um if pode ser resolvida como true ou false
// do mesmo jeito 7 * 2 pode ser resolvido em 14
// caso não coloque parenteses o js confunde as chaves do objeto com a da função
const idade = pessoas.map(obj => ({idade: obj.idade}));
// delete obj.nome;
// return obj;

// metodo map altera o array original pois o que é copiado é a referencia
//pra resolver isso você pode criar uma cópia usando spread operator
//e modificar a cópia e retornar a cópia
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(comIds)