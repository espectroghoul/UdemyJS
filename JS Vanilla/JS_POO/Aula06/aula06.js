const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
}
const objC = new Object();
objC.chaveC = 'C';
//aqui você tem objC que tem objB que tem objA dessa forma os três conseguem acessar as chaves uns dos outros
Object.setPrototypeOf(objB, objA) //objB recebe os metodos e atributos etc do objA em forma de prototype
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

//Object.getPrototypeOf(objC); mostra o proto do objC