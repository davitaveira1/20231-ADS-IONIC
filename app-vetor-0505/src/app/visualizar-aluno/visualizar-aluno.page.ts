import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VetorDadosService } from '../services/vetor-dados.service';

@Component({
  selector: 'app-visualizar-aluno',
  templateUrl: './visualizar-aluno.page.html',
  styleUrls: ['./visualizar-aluno.page.scss'],
})
export class VisualizarAlunoPage implements OnInit {

  indice:number;
  a : any;

  constructor(public parametroRota : ActivatedRoute,
              public dados : VetorDadosService) { }

  ngOnInit() {

    this.parametroRota.params.subscribe(
      
      (data:any)=>{
      this.indice = data.item;
    }
    
    )

    this.a = this.dados.getVetorObjetos()[this.indice];
    console.log(this.a.name);
    
  }



}

