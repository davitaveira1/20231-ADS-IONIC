import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomeUserPage } from './nome-user.page';

const routes: Routes = [
  {
    path: '',
    component: NomeUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomeUserPageRoutingModule {}
