const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Marcus'},
    {id: 1, nome: 'Helena'},
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     //pega um atributo do objeto pessoa
//     const { id } = pessoa;
//     //toda vez que o objeto é vazio ele não tem posições 
//     //o que te permite criar você o nome das posições como na linha abaixo
//     novasPessoas[id] = { ...pessoa};
// }
//muda a forma de criar ou obter valores
//dessa forma a chave continua sendo do tipo number
//e mantem a ordem que os objetos foram criados no vetor
const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

// for (const [identifier, {id, nome}] of novasPessoas) {
//     console.log(identifier, id, nome);
// }

novasPessoas.delete(2);
console.log(novasPessoas);

//console.log(novasPessoas.get(2));


