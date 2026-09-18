function Calculadora() {
    this.display = document.querySelector('.display');
    this.botao = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if(el.classList.contains('btn-clear')) {
                return this.limpaCampo();
            }
            if(el.classList.contains('btn-num')) {
                return this.btnDisplay(el);
            }

            if(el.classList.contains('btn-eq')){
                return this.calcular();
            }

            if(el.classList.contains('btn-del')) {
                return this.apagar();
            }
        })
    }

    this.calcular = () => {
        const resultado = eval(this.display.value);
        this.display.value = resultado;
    }


    this.btnDisplay = (el) => {
        const valor = el.textContent;
        this.display.value += valor;
    }
    
    this.limpaCampo = () => {
        this.display.value = '';
    }

    this.apagar = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.iniciaCalc = () => {
        this.botao();
    }

}

const calc = new Calculadora();
calc.iniciaCalc();