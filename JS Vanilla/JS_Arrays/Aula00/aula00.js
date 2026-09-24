
//const nome = 'Gilberto';
//console.log(nome[0]);

const alunos = ['Luiz', 'Maria', 'João'];
//primitivo cópia o valor da variavel
// por referencia(array,objeto,function) = copia a referencia ou seja aponta para o mesmo valor
//let a = [1,2,3];
//let b = a apontam para o mesmo valor
//para resolver você pode fazer isso
//let b = [...a];// agora b é independente
//let b = {...a}; considerando que a é um objeto o mesmo que foi feito acima pode ser feito com objeto

console.log(typeof alunos); // retorna como sendo do tipo objeto
console.log(alunos instanceof Arrray); // retorna um boleano para a pergunta, nesse caso true


//alunos.push('Otávio'); //adiciona ao final do array
//alunos.push('Luiza');
//quando usa -2 no segundo parametro do slice ele elimina os dois ultimos elementos do array
//se colocar apenas o -2 sozinho ele retorna apenas os ultimos dois elementos
//se colocar dois paramentros e o primeiro for negativo ele retorna um array vazio
//console.log(alunos.slice(-2));


//delete alunos[1];
//console.log(alunos);

//const removido = alunos.pop(); //remove o ultimo elemento do array e o adiciona a variavel
//const removido = alunos.shift(); //remove o primeiro elemento do array e o adiciona a variavel
//alunos.unshift('Luiza') // adiciona ao começo do array
//alunos.unshift('Fabio') // adiciona ao começo do array


// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fabio';
// alunos[alunos.length] = 'Luana';
//alunos[0] = 'Eduardo';
//cria o indice e coloca o valor de luiza dentro dele
//alunos[3] = 'Luiza';
