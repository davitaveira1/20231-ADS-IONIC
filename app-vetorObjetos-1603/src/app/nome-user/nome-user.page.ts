import { VetorObjetosService } from './../services/vetor-objetos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome-user',
  templateUrl: './nome-user.page.html',
  styleUrls: ['./nome-user.page.scss'],
})
export class NomeUserPage implements OnInit {

  

  constructor(public Objeto : VetorObjetosService) {

    this.Objeto.setObjeto("davi","teste.png");
    this.Objeto.setVetorObjetos("daniel","daniel.png");
    this.Objeto.setVetorObjetos("lucas","lucas.png");
    this.Objeto.setVetorObjetos("rafael","rafael.png");

   }
   
  ngOnInit() {



  }



}
