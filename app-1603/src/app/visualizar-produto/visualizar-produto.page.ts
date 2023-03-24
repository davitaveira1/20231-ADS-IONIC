import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.page.html',
  styleUrls: ['./visualizar-produto.page.scss'],
})
export class VisualizarProdutoPage implements OnInit {

  indice:number;

  constructor(public parametroRota : ActivatedRoute) { }

  ngOnInit() {

    this.parametroRota.params.subscribe(
      
      (data:any)=>{
      this.indice = data.item;
    }
    
    )
  }

}
