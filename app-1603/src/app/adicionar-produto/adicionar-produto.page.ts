import { DadosService } from './../services/dados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})
export class AdicionarProdutoPage implements OnInit {

  nome : string = "";

  constructor(public dados : DadosService,
              public rota : Router,
              public toast : ToastController) { }

  ngOnInit() {
    
  }

  cadastrar(){
    this.dados.setFrutas(this.nome);
    this.rota.navigate(['listar-produtos']);
    this.mensagem('Produto '+this.nome+' adicionado com sucesso!',3000,'success');
    this.nome="";
  }

  async mensagem(msg : any,duration : any,color : any) {
    const toast = await this.toast.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }

}
