import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  frutas = ['Uva','Banana','Melão'];
  indice:number;

  public getFrutas(){
    return this.frutas;
  }

  public setFrutas(fruta:string){
    this.frutas.push(fruta);
  }

  public removeFruta(fruta:string){
    this.indice = this.frutas.indexOf(fruta);
    console.log(this.frutas.splice(this.indice,1));
  }

  public visualizarFruta(fruta:string){
    this.indice = this.frutas.indexOf(fruta);
    this.rota.navigate(['visualizar-produto/'+this.indice]);
  }

  public nomeFruta(indice : number) : string {
    return this.frutas[this.indice];
  }

  public encaminharEdicaoFruta(fruta : string){
    this.indice = this.frutas.indexOf(fruta);
    this.rota.navigate(['editar-produto/'+this.indice]);
  }

  public editarFruta(novoNome : string){
    this.frutas.splice(this.indice,1,novoNome);
  }

  constructor(public rota : Router) { }
}
