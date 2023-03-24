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

  public removeFrutas(fruta:string){
    this.indice = this.frutas.indexOf(fruta);
    console.log(this.frutas.splice(this.indice,1));
  }

  constructor() { }
}
