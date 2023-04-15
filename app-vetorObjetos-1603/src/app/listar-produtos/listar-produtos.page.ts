import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {

  

  constructor(public dados : DadosService,
              public rota : Router) { }

  ngOnInit() {
  }

  adicionarProduto(){
    this.rota.navigate(['adicionar-produto'])
  }



}
