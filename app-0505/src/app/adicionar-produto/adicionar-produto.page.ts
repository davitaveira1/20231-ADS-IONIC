import { Component, OnInit } from '@angular/core';
import { ServicoBdService } from '../services/servico-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})

export class AdicionarProdutoPage implements OnInit {

  

  nome : string ="Fanta-laranja 2LT";

  constructor(public servicoBD : ServicoBdService,
              public rota : Router) { }

  ngOnInit() {
  }

  cadastrar(){

    return new Promise(resolve => {
      let dados = {
        acao : 'add',
        nome : this.nome        
      };

      this.servicoBD.dadosApi(dados,'api.php').subscribe(data => {
        console.log("Dados adicionados");
        this.rota.navigate(['adicionar-produto']);     
        

      });

    });     

  }

}
