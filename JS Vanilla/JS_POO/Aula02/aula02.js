// defineProperty -> defineProperties
function Produto(nome, preco, estoque){
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //permite exibição do atributo
        value: estoque, // coloca um valor no atributo
        writable: true, // não permite mudar valor depois que o objeto é criado
        configurable: false //não permite(ou permite) que outro defineProperty mude as propriedades do estoque, tambem não permite que estoque seja apagada se estiver em false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: false
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: false 
        }
    });
}

const p1 = new Produto('Camiseta',20,3);
//console.log(Object.keys(p1))// retorna as chaves do objeto
console.log(p1)
//p1.estoque = 500000;
//delete p1.estoque;
//console.log(p1);