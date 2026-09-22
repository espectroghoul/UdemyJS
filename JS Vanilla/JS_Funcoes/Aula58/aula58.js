//Função construtora -> objetos
//Função fabrica -> objetos
// Construtora -> Pessoa
//factory function é uma função normal que retorna um objeto
// dentro de uma constructor function você não precisa separar as variveis e metodos usando virgula ao invés disso você separa normalmente usando ponto e virgula;
function Pessoa(nome, sobrenome) {
    //variavel privada que só é visivel dentro do objeto
    const ID = 123456;
    //função privada visivel somente dentro do objeto
    const metodoInterno = function(){
        
    }
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Karla', 'Oliveira');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();