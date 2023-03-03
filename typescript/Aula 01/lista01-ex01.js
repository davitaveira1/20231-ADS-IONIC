var PI = 3.1415;
var perimetro = function (raio) {
    return 2 * PI * raio;
};
var volume = function (raio) {
    return 4 / 3 * PI * raio * raio * raio;
};
var raio = 3;
console.log(perimetro(raio));
console.log(volume(raio));
