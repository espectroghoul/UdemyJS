function* geradora1() {
    //retorna esse valor da primeira vez que for chamado
    yield 'Valor 1';
    //retorna esse valor da primeira vez que for chamado
    yield 'Valor 2';
    //retorna esse valor da primeira vez que for chamado
    yield 'Valor 3';
}

const g1 = geradora1();
for(let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;
    //loop infinito
    while(true) {
        yield i;
        i++;
    }
}
//pode gerar quantas functions quiser 
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('vim do y1');
    };

    yield function() {
        console.log('Vim do y2')
    };

    yield function() {
        console.log('vim do y3');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();


//função geradora retorna um objeto por isso usa-se .value para que se retorne apenas o valor do objeto
//.next() faz com que seja chamado o proximo yield se não usar ele é retornado apenas a function vazia junto do seu tipo
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
