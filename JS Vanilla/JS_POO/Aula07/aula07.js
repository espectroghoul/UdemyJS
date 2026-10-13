//produto -> aumento, desconto
// camiseta = Cor caneca, Cor = Plastico
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}


function Camiseta(nome, preco, cor) {
    //camiseta pode atravez dessa linha herdar tudo de Produto
    Produto.call(this, nome, preco);
    this.cor = cor;
}
// como o construtor fica dentro de __proto__ ,quando você copia o produto.prototype para camiseta,
// o construtor de camiseta passa a apontar para a função construtora de produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; // isso resolve o problema de construtor da linha de cima

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material,estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque' , {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if( typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 1111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 15, 'Porcelana',5);
caneca.estoque = 100;
console.log(caneca.estoque)
camiseta.aumento(100);
caneca.aumento(10);
console.log(camiseta);
console.log(caneca);
console.log(produto);