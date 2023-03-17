import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {

  frutas = ['Uva','Banana','Melão'];

  constructor(public rota : Router) { }

  ngOnInit() {
  }

  adicionarProduto(){
    this.rota.navigate(['adicionar-produto'])
  }

}
