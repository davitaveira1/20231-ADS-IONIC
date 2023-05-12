import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss']
})
export class EditarProdutoPage implements OnInit {

  nome : string;

  constructor() { }

  ngOnInit() {
  }

}
