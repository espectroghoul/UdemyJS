// IIFE -> immediately invoked function expression
// (function() {
//     const nome = 'Luiz';
//     console.log(nome);
// }) ();
(function(idade, peso, altura) {
    const sobrenome ='Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura)
})(25, 70, 1.80);
//por ser uma função de auto invocação, ela não tem escopo global, então, a variavel dentro dela não é afetada pela variavel abaixo que tem o mesmo nome
const nome = 'Qualquer coisa';