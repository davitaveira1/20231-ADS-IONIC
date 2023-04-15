import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.page.html',
  styleUrls: ['./visualizar-produto.page.scss'],
})
export class VisualizarProdutoPage implements OnInit {

  indice:number;
  f : string;

  constructor(public parametroRota : ActivatedRoute,
              public dados : DadosService) { }

  ngOnInit() {

    this.parametroRota.params.subscribe(
      
      (data:any)=>{
      this.indice = data.item;
    }
    
    )

    this.f = this.dados.nomeFruta(this.indice);
    
  }



}
