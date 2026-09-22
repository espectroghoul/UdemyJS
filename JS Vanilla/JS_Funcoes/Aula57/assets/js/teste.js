let nome = 'pablo';
function criaObjeto() {
    return {
        nome: '',
        sobrenome: '',
        nomeCompleto() {
            this.nome = 'juanito'
            console.log(nome)
            this.sobrenome = 'Silva';
            return this.nome, this.sobrenome;
        },
        // set nomeCompleto(valor) {
        //     this.nome = valor;
        // },
    };
}

const p1 = criaObjeto();
//p1.nomeCompleto = 'juanito'
p1.nomeCompleto();
console.log(p1.nome, p1.sobrenome);
