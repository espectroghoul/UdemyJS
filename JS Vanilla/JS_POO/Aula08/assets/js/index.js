function verifica() {
    const inputCPF = document.querySelector('#inputCPF').value;
    const cpfLimpo = inputCPF.replace(/\D+/g, '');
    const arrayCPF = Array.from(cpfLimpo);
    const digitoVerificador = arrayCPF.slice(-2).join('');
    
    let multiplicador = 11;
    let result = 0;
    // o segundo return serve para poder retornar o resultado do calculo,
    // nas duas ultimas vezes que o reduce rodar, porque apenas o resultado da ultima vez que o reduce roda é armazenado na variavel, 
    // então se na ultima vez não tiver um return ele vai retornar undefined, então você precisa falar para ele retornar acc que tem o resultado das somas dos calculos
    const primeiroDigito = arrayCPF.reduce((acc, atual, i) => {
        if( i < 9) {
            multiplicador--;
            return acc + atual * multiplicador;
        }
        if( i > 8 && i <=9) {
            result = 11 - (acc % 11);
            if(result > 9) {
                return result = 0
            }
            else {
                return result
            }
        }
        return result;
    },0)
    result = 0;
    multiplicador = 12;
    

    const segundoDigito = arrayCPF.reduce((acc, atual, i) => {
        if( i < 10) {
            multiplicador--;
            return acc + atual * multiplicador;
        }
        if(i > 9 && i <=10) {
            result = 11 - (acc % 11)
            if(result > 9) {
                return result = 0
            }
            else {
                return result
            }
        }
        return result
    },0)
    
    const calcVerifica = String(primeiroDigito) + String(segundoDigito);
    
    if(digitoVerificador === calcVerifica) {
        const paragrafo = document.querySelector('#resultado');
        paragrafo.textContent = "CPF VALIDO"
    }
    else {
        const paragrafo = document.querySelector('#resultado');
        paragrafo.textContent = 'CPF INVALIDO';
    }
}

//705.484.450-52   070.987.720-03