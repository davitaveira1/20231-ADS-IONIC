import { Component, OnInit } from '@angular/core';
import { VetorDadosService } from '../services/vetor-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.page.html',
  styleUrls: ['./listar-aluno.page.scss'],
})
export class ListarAlunoPage implements OnInit {

  cursoTI: string[] = [];

  constructor(public dados: VetorDadosService,
    public rota: Router) {

    this.cursoTI = ["PHP"];

    this.dados.setVetorObjetos("Davi","m","111","a1a1","sim",this.cursoTI);
    this.dados.setVetorObjetos("Daniel","m","222","a2a2","nao",this.cursoTI);
    this.dados.setVetorObjetos("Lucas","m","333","a3a3","sim",this.cursoTI);


  }

  ngOnInit() {



  }

  encaminharCadastrarAluno() {
    this.rota.navigate(['cadastrar-aluno']);
  }

  encaminharVisualizarAluno() {
    this.rota.navigate(['visualizar-aluno']);
  }

}
