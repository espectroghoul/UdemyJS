//const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
//desestruturalização dá pra usar como se fosse um slice bem limitado
//quando sozinho ...algo se chama spread quando no caso abaixo ele é o resto
//const [um, dois, tres] = numeros;
//, ,pula valores do array como no exemplo abaixo
//const [um, ,tres, ,cinco, , sete] = numeros;

//                    0         1          2
//                 0, 1, 2   0, 1, 2    0, 1, 2
const numeros = [ [1, 2, 3],[4, 5, 6], [7, 8, 9] ];
//const [,[,,seis]] = numeros;
const [lista1, lista2, lista3] = numeros
//console.log(seis)
//console.log(numeros[1][2])
console.log(lista3[2]);