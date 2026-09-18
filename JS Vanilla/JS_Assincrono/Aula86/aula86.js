function rand(min, max) { // o errado
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }
// //exemplo de callback
// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // if (typeof msg !== 'string') reject('Bad Value');
        if (typeof msg !== 'string') reject(new Error('Erro'));
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1, 3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi(222, rand(1, 3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi('Exibe dados na tela', rand(1, 3))
}).then(resposta => {
    console.log(resposta)
}).catch(e => {
    console.log('Erro:', e);
}) 

console.log('Isso aqui será exibido antes de qualquer promisse')

