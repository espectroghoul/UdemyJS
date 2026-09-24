//os dois jeitos de declarar funcionam da mesma maneira
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
//valor por referencia

//PEGA UMA FATIA DO ARRAY
// const nomes = ['Eduardo', 'Monica', 'Gilberto','Wallace','Rosana'];
// const novo = nomes.slice(1,3);
// console.log(novo);

//CONVERTE STRING EM ARRAY
//const nome = 'Luiz Otávio Miranda';
//const nomes = nome.split(' '); //usa o parametro para saber onde cortar

//CONVERTE ARRAY EM STRING
const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(', ');//une todos os elementos em um unica string e os separa usando o parametro
console.log(nomes);

//COMANDOS PARA REMOVER ELEMENTOS DO ARRAY
//const finalRemovido = nomes.pop(); //remove o ultimo elemento e o retorna para a variavel removido
//const comecoRemovido = nomes.shift(); //remove o primeiro elemento deslocando os outros elementos e o retorna para a variavel removido
//console.log(nomes, finalRemovido);

//COMANDOS PARA ACRESCENTAR ELEMENTOS NO ARRAY
// nomes.push('João');//ACRESCENTA AO FINAL
// nomes.push('Wallace');//ACRESCENTA AO FINAL
// nomes.unshift('João'); //ACRESCENTA AO COMEÇO
// nomes.unshift('Wallace')//ACRESCENTA AO COMEÇO


// const nomes = ['Eduardo', 'Monica', 'Gilberto','Wallace','Rosana'];
//nomes[2] = 'João';
//delete nomes[2];// fica uma string vazia no local do item apagado

//const novo = nomes; //não pode ser feito, mas se for, os dois valores são alterados juntos como se fossem um só
//console.log(nomes);
//pesquisar sobre o spread operator de array