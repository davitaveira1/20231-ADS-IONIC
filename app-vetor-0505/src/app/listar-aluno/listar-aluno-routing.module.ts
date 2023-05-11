import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarAlunoPage } from './listar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: ListarAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarAlunoPageRoutingModule {}
