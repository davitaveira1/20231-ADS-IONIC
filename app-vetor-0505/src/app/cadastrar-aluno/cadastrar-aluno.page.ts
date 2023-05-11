import { Component, OnInit } from '@angular/core';
import { VetorDadosService } from '../services/vetor-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.page.html',
  styleUrls: ['./cadastrar-aluno.page.scss'],
})
export class CadastrarAlunoPage implements OnInit {

  nome : string="";
  telefone : string="";
  matricula : string="";
  sexo : string="";
  bilingue : boolean;
  bilingueResult : string;
  tec1 : boolean;
  tec2 : boolean;
  tec3 : boolean;
  tec1Result : string;
  tec2Result : string;
  tec3Result : string;
  cursosTI : string[] = [];

  constructor(public dados : VetorDadosService,
              public rota : Router) {}

  ngOnInit() {
  }


  cadastrar(){

    console.log("bilingue: "+this.bilingue);
    console.log("C1: "+this.tec1+" C2: "+this.tec2+" C3: "+this.tec3);

    if(this.bilingue){
      this.bilingueResult = "Bilingue";
    }else{
      this.bilingueResult = "Não Bilingue";
    }    

    if(this.tec1){
      this.tec1Result = "PHP";
      this.cursosTI.push("PHP");
    }else{
      this.tec1Result = "";
    }

    if(this.tec2){
      this.tec2Result = "C#";
      this.cursosTI.push("C#");
    }else{
      this.tec2Result = "";
    }

    if(this.tec3){
      this.tec3Result = "Angular";
      this.cursosTI.push("Angular");
    }else{
      this.tec3Result = "";
    }    

    this.dados.setVetorObjetos(this.nome,this.sexo,this.telefone,this.matricula,this.bilingueResult,this.cursosTI);
    console.log("Cadastrado com sucesso!");
    this.rota.navigate(['listar-aluno']);

  }

}

