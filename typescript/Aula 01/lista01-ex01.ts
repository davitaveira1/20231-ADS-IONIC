const PI=3.1415;

let perimetro = function(raio : number){
    return 2*PI*raio;
}

let volume = function(raio : number){
    return 4/3*PI*raio*raio*raio;
}

let raio=3;
console.log(perimetro(raio));
console.log(volume(raio));