import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VetorObjetosService {

  vetorObjetos : User[] = [];
  uVetor : User;

  public setVetorObjetos(nome : string,imagem: string){
    console.log("Nome: "+nome);
    console.log("Imagem: "+imagem);
    this.uVetor = new User(nome,imagem);
    this.vetorObjetos.push(this.uVetor);
  }

  public getVetorObjetos() : User[]{
    return this.vetorObjetos;
  }

  Objeto : User;
  u : User;  

  public setObjeto(nome : string,imagem: string){
    this.u = new User(nome,imagem);
    this.Objeto = this.u;
  }

  public getObjeto(){
    return this.Objeto;
  }

  constructor() { }
}

class User {
  name : string;
  imagem : string;

  constructor(name: string,imagem: string) {
      this.name = name;
      this.imagem = imagem;
  }

  public getName() : string{
    return this.name;
  }

  public getImagem() : string{    
    return this.imagem;
  }

  showUserName() {
      console.log(`O nome do usuário é: ${this.name}`);
      //return this.name;
  }
}