//Factory functions / Constructor functions / Classes
function criaObjeto(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaObjeto('Luiz', 'Otávio');
console.log(p1.nomeCompleto);