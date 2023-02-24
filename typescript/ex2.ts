let idade : number = 12;
let idade2;
let flag : boolean;
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2.3];
let anyType : any;

function warnUser():void {
    console.log("Teste");
};

warnUser();

class pessoa{
    nome2 : string;

    verNome(){
        return "Meu nome é: " + this.nome2;
    }
    
};

let p = new pessoa(); 
p.nome2 = "ricardo";
console.log(p.verNome());

// person = {
//     name:"Davi";
//     age: 18;
// };

let media = (x : number, y: number) : number => {
    return (x+y)/2;
}

console.log(media(2,4));

let media2 = function (x:number,y:number):number{
    return (x+y)/2;
}

console.log(media2(3,3));