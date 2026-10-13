
function VerificaCpf(cpf) {
    Object.defineProperty(this, 'cpf', {
        get: function() {
            return cpf.replace(/\D+/g, '');
        },
        set: function(valor) {
            cpf = valor;
        }
    })
}
VerificaCpf.prototype.geraDigito = function(cpfParcial) {
    let multiplicador = cpfParcial.length + 1;
        const arrayCpf = Array.from(cpfParcial);
        const somaDigito = arrayCpf.reduce((acc, valor) => {
            acc += valor * multiplicador;
            multiplicador--;
            return acc;
        }, 0)
        const resultado = 11 - (somaDigito % 11);
        if(resultado < 10) {
            return resultado
        }
        return 0;
}
VerificaCpf.prototype.verifica = function() {
    const cpfParcial = this.cpf.slice(0, -2);
    const primeiroDigito = this.geraDigito(cpfParcial);
    const segundoDigito = this.geraDigito(cpfParcial + primeiroDigito);
    const digitoGerado = String(primeiroDigito) + String(segundoDigito);
    const digitoOriginal = this.cpf.slice(-2);
    if(digitoGerado === digitoOriginal) {
        return 'CPF Valido'
    }
    return 'CPF Invalido'
}

const objCpf = new VerificaCpf('705.484.450-52');
console.log(objCpf.verifica());
//070.987.720-03
//705.484.450-52