import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})
export class AdicionarProdutoPage implements OnInit {

  nome : String = "";

  constructor(public rota : Router,
              public mensagem : ToastController) { }

  ngOnInit() {
    
  }

  cadastrar(){
    //1º passo - inserir no vetor
    this.rota.navigate(['listar-produtos']);
    //enviar mensagem
    this.nome="";
  }

}
