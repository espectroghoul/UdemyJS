const produto = { nome: 'Caneca', preco: 1.8, material: 'porcelana'};
//console.log(Object.entries(produto));
for(let [chave, valor] of Object.entries(produto)) {
    //console.log(chave, valor);
    console.log(valor[0], valor[1]);
}
//Object.freeze(produto); // bloqueia alterações nos valores do objeto
//const caneca = { ...produto, material: 'porcelana'}; //faz uma copia do objeto
//const caneca = Object.assign({}, produto, {material: 'porcelana'})// faz uma copia do objeto produto
//const caneca = {nome: produto.nome, preco: produto.preco};


//produto.nome = 'Luiz Otávio';
//console.log(produto);
//console.log(caneca.nome);
//console.log(Object.keys(produto)); // retorna as chaves do objeto produto
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // retorna as propriedades do atibuto nome do objeto produto
//console.log(Object.values(produto));

// const usuario = { nome: 'Carlos', idade: 28, cidade: 'Santos' };
// for (const chave in usuario) {
//   console.log(`${chave}: ${usuario[chave]}`);
// }

