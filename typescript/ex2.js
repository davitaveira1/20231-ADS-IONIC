var idade = 12;
var idade2;
var flag;
var list = [1, 2, 3];
var list2 = [1, 2.3];
var anyType;
function warnUser() {
    console.log("Teste");
}
;
warnUser();
var pessoa = /** @class */ (function () {
    function pessoa() {
    }
    pessoa.prototype.verNome = function () {
        return "Meu nome é: " + this.nome2;
    };
    return pessoa;
}());
;
var p = new pessoa();
p.nome2 = "ricardo";
console.log(p.verNome());
// person = {
//     name:"Davi";
//     age: 18;
// };
var media = function (x, y) {
    return (x + y) / 2;
};
console.log(media(2, 4));
var media2 = function (x, y) {
    return (x + y) / 2;
};
console.log(media2(3, 3));
