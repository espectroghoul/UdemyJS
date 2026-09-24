//Aula de splice()
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

/*
1° Parametro, indica o indice atual
2° Parametro, quantos elementos seram removidos
*/

//const removidos = nomes.splice(0,1) //shift
//const removidos = nomes.splice(nomes.length -1, 1) //pop
//const removidos = nomes.splice(-1, 1) //pop
//const acrescenta = nomes.splice(nomes.length, 0, 'Luiz'); //push
const acrescenta = nomes.splice(0, 0, 'Luiz') //unshift
console.log(nomes, acrescenta);
