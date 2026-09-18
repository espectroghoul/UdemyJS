//Promise.all = executa um array de promises
//Promise.race = entrega somente a primeira promise que for resolvida
//Promise.resolve, Promise.reject

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (typeof msg !== 'string') {
            reject(false);
            return;
        }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}



const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    //esperaAi(1000, rand(1, 5)), //teste de reject 
    //'Outro valor'
]; 

function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('Erro', e));

// //Promise.all(promises)
// Promise.race(promises).then(function(valor) {
//     console.log(valor);
// }).catch(function(erro) {
//     console.log(erro);
// });
