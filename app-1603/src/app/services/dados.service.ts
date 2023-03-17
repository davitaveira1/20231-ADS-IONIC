import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  frutas = ['Uva','Banana','Melão'];

  public getFrutas(){
    return this.frutas;
  }

  public setFrutas(fruta:string){
    this.frutas.push(fruta);
  }

  constructor() { }
}
