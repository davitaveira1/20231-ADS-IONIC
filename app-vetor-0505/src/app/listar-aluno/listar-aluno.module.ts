import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAlunoPageRoutingModule } from './listar-aluno-routing.module';

import { ListarAlunoPage } from './listar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAlunoPageRoutingModule
  ],
  declarations: [ListarAlunoPage]
})
export class ListarAlunoPageModule {}
