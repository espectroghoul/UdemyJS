//toda vez que você quiser chamar uma função ou usar um atributo do objeto você precisa o utilizar o this para que o objeto saiba que você está referenciando o atributo, função dele e não um parametro
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        
        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e=> {
                //keyCode 13 é equilavente a tecla enter
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                //interpreta qualquer coisa que estiver na variavel,
                // nesse caso ele faz calculos, mas é muito perigoso, 
                // porque abre brechas para digitarem algum código de js, que será interpretado pelo eval,
                // mas aqui esse erro foi tratado, ainda assim é melhor não usar
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida')
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida')
                return;
            }
        },

        cliqueBotoes() {
            //sem arrow function o this passa a ser document nesse caso
            //document.addEventListener('click', function (e) {
            //quando usa uma arrow-function o this não perde sua referencia ao objeto
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }/*.bind(this) faz o this voltar a referenciar o objeto ao inves do document*/);
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();