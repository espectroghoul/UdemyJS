function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        //value: estoque, 
        //writable: true, 
        configurable: false,
        get : function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta',20,3);
//console.log(p1);
p1.estoque = 5000;
console.log(p1.estoque);
//console.log(p1.estoque);
