let x: number = 25;

//x = "teste";

console.log(x);

//inferência x annotation

//1)inferência
let y = 12
//y = 'teste'

//2)Annotation
let z: number = 10
//z = 'teste'

//Tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

console.log(firstName);
console.log(typeof firstName);
console.log(age);
console.log(isAdmin);

//String != string

let nome: string = 'davi'
let nome2: String = 'davi2'

console.log(typeof nome)
console.log(typeof nome2)

//arrays
const myNumbers: number[] = [1, 2, 3];

myNumbers.push(4);

console.log(myNumbers);
console.log(myNumbers.length)

//tuplas
let myTuple: [number, string, string[]];

myTuple = [10, "string", ["a", "b", "c"]];

console.log(myTuple)

// object literals
const user: { name: string; age: number } = {
    name: "Matheus",
    age: 30,
};

console.log(user);
console.log(user.name)
console.log(user.age)

// any
let a: any = 0;

a = "teste";
a = true;
a = [];

//union type
let id: number | string = "10";
id = 10;
id = "200"

//type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "0001";

//enum
//Outra forma de organizar o código
//tamanho de roupa (size: medio, size: pequeno)

enum Size {
    P = "Pequeno",
    M = "Médio",
    L = "Grande",
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};

console.log(camisa);

//literal types
let teste: "algumvalor" | null

//teste = "outrovalor"
teste = null
teste = "algumvalor"

//funções
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(2, 2));

function sayHelloTo(name: string): string {
    return `Hello ${name}!`;
}

console.log(sayHelloTo("Matheus"));

function logger(msg: string): void {
    console.log(msg);
}

logger("Testando");

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
        return;
    }
    console.log(`Hello ${name}`);
}

greeting("João");
greeting("Pedro", "Sir");

//Interfaces
interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 10,
    n2: 12,
};

console.log(multiplyNumbers(someNumbers));

//narrowing
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }

    console.log("Não foi passado um número!");
}

doSomething(5);
doSomething(false);

//classes
class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
}

const zeca = new User("Zéca", "Admin", true);

zeca.showUserName();

//interface em classes
interface IVehicle {
    brand: string;
    showBrand(): void;
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do veículo é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

//heranca
class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log("teste2")

//repetição

let carros = [ 'fiesta', 'onix', 'fusca', 'saveiro' ];

let vet : number[] = [1,2,3,4];

for (let carro of carros) {
    console.log(carro);
}

console.log("vet2")

for (let v of vet) {
    console.log(v);
}