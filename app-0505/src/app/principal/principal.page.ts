import { Component, OnInit } from '@angular/core';
import { ServicoBdService } from '../services/servico-bd.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  user : string;
  senha : string;

  constructor(public servicoBD : ServicoBdService,
              public mensagem: ToastController,
              public rota : Router,
              public storage : NativeStorage) { }

  ngOnInit() {
  }

  logar(){
    console.log("User: "+this.user);
    return new Promise(resolve => {
      let dados = {
        acao : 'logar',
        user : this.user,
        senha : this.senha
      };

      this.servicoBD.dadosApi(dados,'api.php').subscribe(data => {

        console.log("User: "+this.user);

        if(data['success']){
          this.storage.setItem('nomeUsuario','Davi Taveira');
          this.msg('Usuário logado com sucesso!', 3000, 'success');
          this.rota.navigate(['listar-produtos']);
        }else{
          this.msg('Erro user/senha!', 3000, 'danger');
        }
          

      });

    });       

  }

  async msg(msg: any, duration: any, color: any) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }

}
