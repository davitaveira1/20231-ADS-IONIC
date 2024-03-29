import { Component, OnInit } from '@angular/core';
import { ServicoBdService } from '../services/servico-bd.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {

  produtos : any = [];
  nomeUsuario : string;

  constructor(public servicoBD : ServicoBdService,
              public rota : Router,
              public storage : NativeStorage,
              public userLogado : AutenticacaoService) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    console.log("Nome user logado: "+this.userLogado.getUser());
    this.nomeUsuario=this.userLogado.getUser();

   this.produtos = [];
   this.listar();
  }

  listar(){


    return new Promise(resolve => {
      let dados = {
        acao : 'listar'       
      };

      this.servicoBD.dadosApi(dados,'api.php').subscribe(data => {

        
        for(let dadosProdutos of data['result']){
          this.produtos.push(dadosProdutos);
          //console.log("Valores: "+this.produtos.nome);
        }
        

        //resolve(true);
        
      });

    })

  }

  editarProduto(id : number){
    this.rota.navigate(['editar-produto/'+id]);
  }

  visualizarProduto(id : number){
    this.rota.navigate(['visualizar-produto/'+id]);
  }

  excluirProduto(id : number){

    return new Promise(resolve => {
      let dados = {
        acao : 'excluir',
        id : id        
      };

      this.servicoBD.dadosApi(dados,'api.php').subscribe(data => {
        console.log("Dados excluídos com sucesso!");
        this.ionViewWillEnter();            

      });

    });    

  }

  adicionarProduto(){
    this.rota.navigate(['adicionar-produto']);
  }

  logout(){
    this.rota.navigate(['principal']);
  }
}
