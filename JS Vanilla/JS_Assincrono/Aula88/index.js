function rand(min = 0, max = 3) {
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

// esperaAi('Fase 1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return fase;
// })
// .then(fase => {
//     console.log('Terminamos na fase:', fase);
// })
// .catch(e => console.log('Erro:', e));

async function executa(){
    try{
        //tirar o await e chamar logo em seguida antes do setTimeout acabar triga o status de pending porque não deu tempo a function retornar o valor
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);
        //setTimeout pede para exibir o retorno depois de 1100 ou seja logo depois do tempo da promise acabar e ela retornar o valor
        setTimeout(function() {
            console.log('Está promise estava pendente! ',fase1);
        }, 1100)
        const fase2 = await esperaAi(2, rand());// triga o catch
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();
//pending = pendente
//fulfilled = completou a promise e retornou um valor
//rejected = promise rejeitada ou seja não passou no filtro de aprovação

//ativa o erro de pending
const teste2 = esperaAi('qlq', 5000);
console.log(teste2);