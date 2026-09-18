//factory functions
//sem o this.nome o objeto não sabe a qual nome você está se referindo e apresenta erro
//nesse exemplo nome está sendo passado como parametro e não como variavel dentro do objeto então ele não apresenta erro ao ser tirado
//com this o getter e o setter acessam o atributo nome e sobrenome e sem ele é acessado o parametro nome e sobrenome
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){// por não settar nenhum valor isso pode ser um getter
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' '); //separa toda vez que encontra um espaço vazio na string
            this.nome = valor.shift();// tira o primeiro item do vetor e o coloca na variavel nome
            this.sobrenome = valor.join(' ');// junta tudo em uma string com um espaço vazio entre os items
            //console.log(valor);
        },
        fala(assunto = 'falando sobre nada') {
            //quando se usa this assume-se que o valor é igual ao da variavel/objeto que está o chamando
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso:p,
        //Getter
        get imc() {// graças ao get isso deixa de ser uma função e passa a ser um atributo assim como nome e sobrenome
            const indice = this.peso / (this.altura ** 2);// ** = exponenciação = ex: 2**3 = 2x2x2
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);//nessa variavel o this.nome é igual a Luiz
p1.nomeCompleto = 'Karla Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.fala());

//console.log(p1.imc);
//const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);//nessa outra o this.nome é igual a Maria
//console.log(p2.imc);
//console.log(p1.nome);
//console.log(p1.sobrenome);
//console.log(p1.fala('falando sobre JS'));
//console.log(p2.fala('falando sobre JS'));
