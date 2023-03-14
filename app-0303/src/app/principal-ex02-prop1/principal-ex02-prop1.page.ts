import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-ex02-prop1',
  templateUrl: './principal-ex02-prop1.page.html',
  styleUrls: ['./principal-ex02-prop1.page.scss'],
})
export class PrincipalEx02Prop1Page implements OnInit {

  n1 : number = 2;
  n2 : number = 4;
  soma : number;

  constructor() { }

  ngOnInit() {
  }

  somar(){
    console.log(this.n1+this.n2);
    this.soma = Number(this.n1) + Number(this.n2);
  }

}
