//PRECISA EXECUTAR NO NAVEGADOR
//composição/mixing
//factory function
const falar = {
    falar() {
        console.log(`${this.nome} está falando. `);
    },
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo. `);
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo. `);
    },
};
//
//const pessoaPrototype = {...falar, ...comer, ...beber}
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    // //dessa forma os prototypes não se acoplam 
    // //os objetos apenas usam esses prototypes aqui
    // const pessoaPrototype = {
    //     falar() {
    //         console.log( `${this.nome} ${this.sobrenome} está falando`)
    //     },
    //     comer() {
    //         console.log( `${this.nome} ${this.sobrenome} está comendo`)
    //     },
    //     beber() {
    //         console.log( `${this.nome} ${this.sobrenome} está bebendo`)
    //     },
    // };
    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Marcus', 'Lavrius');
console.log(p1);