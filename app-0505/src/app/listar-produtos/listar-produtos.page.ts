import { Component, OnInit } from '@angular/core';
import { ServicoBdService } from '../services/servico-bd.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {

  empresas : any = [];

  constructor(public servicoBD : ServicoBdService) { }

  ngOnInit() {
  }

  listar(){


    return new Promise(resolve => {
      let dados = {
        acao : 'listar'       
      };

      this.servicoBD.dadosApi(dados,'api.php').subscribe(data => {

        /*
        for(let dadosEmpresa of data['result']){
          this.empresas.push(dadosEmpresa);
        }
        resolve(true);
        */
      });

    })

  }

}
