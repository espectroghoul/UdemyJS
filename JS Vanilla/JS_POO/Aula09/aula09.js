//Polimorfismo = subclasses
//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag.: ${this.agencia} ${this.conta} | ` 
        + `Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    //nesse caso this é igual a ContaCorrente
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
//copia todos os prototype de Conta para o prototype de ContaCorrente
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//apenas reescreve a função sacar  herdada
//APENAS nesse objeto a a função herdada(copiada) e apagada e o sacar abaixo toma seu lugar
//no outro objeto a função sacar continua com seu comportamento original
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
//criado apenas para mostrar que o sacar do objeto conta que foi copiado pra cá 
//continua com seu comportamento original
//e que sobreescrever um metodo pai em uma classe filha é chamada de polimorfismo
function ContaPoupanca(agencia, conta, saldo) {
    //nesse caso this é igual a ContaPoupanca
    Conta.call(this, agencia, conta, saldo);
    
}
//copia todos os prototype de Conta para o prototype de ContaPoupanca
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11,22,0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca(12, 33, 0)
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);