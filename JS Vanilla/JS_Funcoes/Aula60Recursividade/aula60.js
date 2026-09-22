//função que que chama ela mesma durante a declaração até cumprir a condição
// o limite de recurção é 1000
function recursiva(max) {
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);