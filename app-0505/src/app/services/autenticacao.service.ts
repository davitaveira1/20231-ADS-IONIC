import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  nomeUserLogado : string;

  constructor() { }

  public getUser(){
    return this.nomeUserLogado;
  }

  public setUser(nome : string){
    this.nomeUserLogado = nome;
  }
}
