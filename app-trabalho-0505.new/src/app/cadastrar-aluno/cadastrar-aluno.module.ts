import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarAlunoPageRoutingModule } from './cadastrar-aluno-routing.module';

import { CadastrarAlunoPage } from './cadastrar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarAlunoPageRoutingModule
  ],
  declarations: [CadastrarAlunoPage]
})
export class CadastrarAlunoPageModule {}
