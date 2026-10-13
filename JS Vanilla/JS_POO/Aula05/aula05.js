function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
//todos os objetos criados com o molde Pessoa herdam o metodo estouAqui
//quando você cria metodos no objeto e no proto com o mesmo nome o metodo do objeto sobrescreve qualquer outro
//todo objeto tem um proto, você pode ver isso usando console.dir(nomedoobjeto) no navegador vai ter um __proto__ é lá onde fica
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Roberto', 'Alvaro');
const p2 = new Pessoa('Rachel', 'Sabrina');
const data = new Date(); // <-- Date = Função construtora
console.dir(p1);
//console.dir(data);


