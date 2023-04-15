import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {

  novoNome : string;
  indice : number;
  f : string;

  constructor(public dados : DadosService,
              public mensagemEdicao : ToastController,
              public parametroRota : ActivatedRoute,
              public rota : Router) { }

  ngOnInit() {

    this.parametroRota.params.subscribe(

      (data : any)=>{
        this.indice = data.item;
      }

    )

    this.f = this.dados.nomeFruta(this.indice);
    this.novoNome = this.f;

  }

  editar(novoNome : string){

    this.dados.editarFruta(novoNome);
    this.rota.navigate(['listar-produtos']);
    this.mensagem('Produto '+this.novoNome+' editado com sucesso!',3000,'success');

  }

  async mensagem(msg : any,duration : any,color : any) {
    const toast = await this.mensagemEdicao.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }  

}
