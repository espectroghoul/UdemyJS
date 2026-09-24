//objeto literal
// const Pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
// }
//deleta a chave nome junto de seu valor
//delete Pessoa2.nome;

// console.log(Pessoa.nome);
// console.log(Pessoa.sobrenome);
// //esse segundo modo é bom para quando você não sabe o valor da chave e vai recebe-lo de forma dinamica
// const chave = 'nome';
// console.log(Pessoa[chave]);

const Pessoa2 = new Object();
Pessoa2.nome = 'Fernando';
Pessoa2.sobrenome = 'marcos';
Pessoa2.idade = 30;
Pessoa2.falarNome = function() {
    return (`${this.nome} está falando seu nome`)
}
Pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
// for (let chave in Pessoa2) {
//     console.log(chave);
// }
for (let chave in Pessoa2) {
    console.log(Pessoa2[chave]); //retorna o valor da chave
}
//console.log(Pessoa2.falarNome())
//console.log(Pessoa2.getDataNascimento());