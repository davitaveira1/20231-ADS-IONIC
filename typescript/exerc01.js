var nome = "davi";
console.log(nome);
var media = function (x, y) {
    return (x + y) / 2;
};
console.log("A média é: ", media(2, 2));
var pessoa = /** @class */ (function () {
    function pessoa() {
    }
    pessoa.prototype.getNome = function () {
        console.log("O nome é: " + this.nome);
    };
    pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    return pessoa;
}());
var p = new pessoa();
p.setNome("Ricardo");
p.getNome();
