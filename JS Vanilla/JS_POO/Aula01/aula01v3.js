//Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this); não permite modificações nos valores das chaves
}
//new cria um objeto vazio e usa o 
//this da forma para que os atributos e metodos sejam iguais a criação do objeto na variavel p1 e não a outro objeto criado usando a mesma forma

//exemplo na variavel p1 o this aponta para o objeto Pessoa que recebe Luiz e Miranda e que está dentro dela

//na p2 ela aponta para o objeto que está dentro dela e não o objeto da p1
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Roberta', 'Soares');
console.log(p1, p2);
