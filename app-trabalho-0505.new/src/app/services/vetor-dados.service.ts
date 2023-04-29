import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VetorDadosService {

  vetorObjetos: User[] = [];
  uVetor: User;
  indice : number;

  public setVetorObjetos(nome: string, sexo : string, telefone : string, matricula : string, alunoBilingue : string, cursosTI : string[]) {
    console.log("Nome: " + nome);
    console.log("Sexo: " + sexo);
    console.log("Telefone: " + telefone);
    console.log("Matricula: " + matricula);
    console.log("Aluno bilingue: " + alunoBilingue);
    console.log("Cursos TI: " + cursosTI);

    this.uVetor = new User(nome, sexo, telefone, matricula, alunoBilingue, cursosTI);
    this.vetorObjetos.push(this.uVetor);
  }

  public getVetorObjetos(): User[] {
    return this.vetorObjetos;
  }

  Objeto: User;
  u: User;
  

  public setObjeto(nome: string, sexo : string, telefone : string, matricula : string, alunoBilingue : string, cursosTI : string[]) {
    this.u = new User(nome, sexo, telefone, matricula, alunoBilingue, cursosTI);
    this.Objeto = this.u;
  }

  public getObjeto() {
    return this.Objeto;
  }

  
  public visualizarAluno(aluno: User){
    this.indice = this.vetorObjetos.indexOf(aluno);
    this.rota.navigate(['visualizar-aluno/'+this.indice]);
  }

  constructor(public rota : Router) { }
}

class User {
  name: string;
  sexo: string;
  telefone: string;
  matricula: string;
  alunoBilingue: string;
  cursosTI: string[];


  constructor(name: string, sexo : string, telefone : string, matricula : string, alunoBilingue : string, cursosTI : string[]) {
    this.name = name;
    this.sexo = sexo;
    this.telefone = telefone;
    this.matricula = matricula;
    this.alunoBilingue = alunoBilingue;
    this.cursosTI = cursosTI;
  }



  showUserName() {
    console.log(`O nome do usuário é: ${this.name}`);
    //return this.name;
  }
}


