let nome : string = "davi";

console.log(nome);

let media = (x : number,y:number) : number => {
    return (x+y)/2;
}

console.log("A média é: ",media(2,2));

class pessoa{
    private nome : string;

    getNome(){
        console.log("O nome é: "+this.nome);
    }    
    setNome(nome : string){
        this.nome = nome;
    }

}

let p = new pessoa();

p.setNome("Ricardo");
p.getNome();